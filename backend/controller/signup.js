const bcrypt = require( "bcrypt");
const prisma = require ("../lib/prisma.js")
require("dotenv").config()


 const SignUp = async  (req,res) =>{
    const image="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
    try {
      const body =  await req.body;
      console.log(body,"boodyyy");
      
      const { 

        role,
        name,
        lastName,
        buisnessName,
        email,
        dateOfBirth,
        password} =body
      const user = await prisma.user.findFirst({
        where: {
          email: email
        },
      })
     
      if (user?.email)   return res.status(205).send({ message: " email allready exist !" });
      console.log(body);
      const salt = await bcrypt.genSalt(10);
      var hashedpassowrd = await bcrypt.hash(password, salt)
      const newData = await prisma.user.create({
        data: { 
            
            role: role ,
            name: name,
            lastName: lastName,
            buisnessName:buisnessName,
            email: email,
            dateOfBirth: dateOfBirth  ,
            password: hashedpassowrd ,
            image : image ,
        },
      });
      if(!newData)  return res.status(208).send({ message: " failed to signup" });
     return res.status(201).send({ message: "Success Register " });
     } catch (error) {
      console.log(error);
      return   res.status(408).send({ error:error});
    }
  }
  module.exports = SignUp ;