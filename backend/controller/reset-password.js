
const { google } = require('googleapis');
const prisma = require("../lib/prisma.js")
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
const CLIENT_ID = "158506994862-p6mi7ndl4m8f576p7fcbpq3kjq4v3kkb.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04es7KwnLR_k7CgYIARAAGAQSNwF-L9Irsr2lYAHJgagWGQFbO-tECgXDYvQ9JtrsoppVZIxP6U3HlZ0FWOStFr-hq3-ktxshXh8";
// const oAuth2Client = new OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: "rayenguedri24@gmail.com",
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: oAuth2Client.getAccessToken(),
//     },
// });
const verificationCodeMap = new Map();

const Sendverification = async (req, res) => {
    const { email } = req.body;


    const user = await 
    prisma.user.findFirst({ where: { email: email } });
    console.log("🚀 ~ file: reset-password.js:35 ~ Sendverification ~ user :", user )
    
    if (user) {
        const verificationCode = Math.floor(1000 + Math.random() * 9000);
        const mailOptions = {
            from: "rayenguedri24@gmail.com",
            to: email,
            subject: "Reset Password Code",
            text: `Your reset password code is ${verificationCode}`,
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
