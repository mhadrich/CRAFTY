
const { google } = require('googleapis');
const prisma = require("../lib/prisma.js")
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
const CLIENT_ID = "158506994862-p6mi7ndl4m8f576p7fcbpq3kjq4v3kkb.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04Xb9XdQefsQMCgYIARAAGAQSNwF-L9IrXWuBM5lPKbrOZN8Eb7NaoNeUpx5bEFEfdM0zoPe1OMC0nrrItOwZVQTNVN6h4HpKN7I";
const oAuth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "rayenguedri24@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: "ya29.a0AfB_byAxM6E8zMJMq2tJZAxpdpixLgfbOMS7CQFAmL6wrOb1GeBDztw6j2YCXttT7NSgRNAF5GE7msygD4du9sZ0z8Cr359FvTZMOjIRD26GOnWnZ_hqQxHNoPogqLBfl_FV1U1pBoQwSG1jbb4PIUXVEVCdD8cod1wOaCgYKARUSARISFQGOcNnCUexqUsC_SSp6lReoLC1ncQ0171",
    },
});
const verificationCodeMap = new Map();

const Sendverification = async (req, res) => {
    const { email } = req.body;


    const user = await 
    prisma.user.findFirst({ where: { email: email } });
    console.log("🚀 ~ file: reset-password.js:35 ~ Sendverification ~ user :", user )
    
    if (user) {
        const verificationCode = Math.floor(1000 + Math.random() * 9000);
        const mailOptions = {
            from: "NoReply@Crafty.com",
            to: email,
            subject: "Password Reset Verification Code",
            html: `<!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Password Reset Verification Code</title>
            </head>
            <body>
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <table align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      <tr>
                        <td align="center" bgcolor="#CFB49B" style="padding: 40px 0 30px 0;">
                          <h1 style="color: #ffffff; font-size: 24px;">Password Reset Verification Code</h1>
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #333333; font-size: 16px;">
                                <p>Dear ${user.name},</p>
                                <p>We have received a request to reset your password for your Crafty account. To complete this process, please use the following verification code:</p>
                                <p style="font-weight: bold; font-size: 20px;">Verification Code: ${verificationCode}</p>
                                <p>This code will expire in 1 hour. Please do not share this code with anyone for security reasons.</p>
                                <p>If you didn't request a password reset, please ignore this email. Your account remains secure.</p>
                                <p>To reset your password, please follow these steps:</p>
                                <ol>
                                  <li>Go to the Crafty password reset page.</li>
                                  <li>Enter your email address and the verification code.</li>
                                  <li>Follow the on-screen instructions to create a new password.</li>
                                </ol>
                                <p>If you have any questions or need assistance, please don't hesitate to contact our support team at crafty.support@Crafty.com </p>
                                <p>Thank you for choosing Crafty.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#CFB49B" style="text-align: center; padding: 20px 0;">
                          <p style="color: #ffffff; font-size: 14px;">&copy; Crafty 2023</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
            `,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send(error);
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).json("Email sent successfully");
                verificationCodeMap.set(email, verificationCode);
                console.log("Verification code for", email, "is", verificationCode);
            }
        });
       
        
    }else{
        return   res.status(205).send("Email not found");
    }

   
}


const Verify =  (req, res) => {
    const { email, code } = req.body;
    console.log("email:", email);
    console.log("code:", typeof (Number(code)));
    const verificationCode = verificationCodeMap.get(email);
    console.log("verificationCode:", verificationCode);
    if (verificationCode == Number(code)) {
        res.status(200).json("Code verified successfully");
    } else {
        res.status(400).json("Invalid code");
    }


}
const resetPassword= async(req,res)=>{
    const { email ,password } = req.body;
    const salt = await bcrypt.genSalt(10);
    var hashedpassowrd = await bcrypt.hash(password, salt)
    const updateUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: hashedpassowrd,
        },
      })
      if(updateUser){
        return   res.status(200).json('Password updated')
        }else{
            return    res.status(400).json('Error in updating the password');
            }
}
module.exports={Sendverification,Verify,resetPassword}
