const bcrypt = require("bcrypt");
const prisma = require("../lib/prisma.js")
require("dotenv").config()
const jwt = require('jsonwebtoken');



const login = async (req, res) => {
  try {

    const { Email, password } = await req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: Email,
      },
    });

    if (!user) {
      return res.status(208).send({ message: " Wrong email" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const access = process.env.ACCESS_TOKEN_SECRET
      if (!access) { throw new Error("Erro no access token secret") }
      const token = jwt.sign({ userId: user.id }, access, { expiresIn: '1h' });
      console.log("🚀 ~ file: login.js:26 ~ login ~ token :", token)





      return res.status(200).json({ message: " Successfully logged in ", token: token })
    } else {
      return res.status(205).json({ message: " Wrong password " })

    }
  } catch (error) {
    console.error('Error:', error);

    return res.status(406).json(error)

  }
};
module.exports = login;