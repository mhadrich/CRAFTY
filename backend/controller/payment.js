const prisma = require("../lib/prisma.js");
require("dotenv").config();
const AddPayment =async (req, res) => {

    const { userId, cardNumber, expiryDate, cvv } = req.body;
  
    try {
      const paymentCard = await prisma.paymentCard.create({
        data: {
          userId,
          cardNumber,
          expiryDate,
          cvv,
        },
      });
  
      res.status(201).json(paymentCard);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add payment card' });
    } 
  }
  const GetAllPaymentCardsByUserId = async (req, res) => {
    const {userId} = req.params 
  
    try {
      const paymentCards = await prisma.paymentCard.findMany({
        where: {
          userId: userId*1, 
        },
      });
  
      res.status(200).json(paymentCards);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve payment cards' });
    }
  };
  module.exports={AddPayment,GetAllPaymentCardsByUserId};
  
  
  