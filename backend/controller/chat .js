const prisma = require("../lib/prisma.js")
const Chatid = async (req, res) => {
  const { user1, user2 } = req.body
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            OR: [
              { id: user1 },
              { id: user2 },
            ],
          },
        },
      },
    });
    console.log("chat", chat)
    return res.send(chat).status(201)



  } catch (err) {
    return res.send(err).status(405)
  }


}
const getmessage = async (req, res) => {
  const { userId, otherUserId } = req.body
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            OR: [
              { id: userId },
              { id: otherUserId },
            ],
          },
        },
      },
    });

    const messages = await prisma.message.findMany({
      where: {
        chatId: chat.id,
      },
      include: {
        chat: true,
      },
    });
    console.log("🚀 ~ file: chat .js:41 ~ getmessage ~ messages:", messages)

    return res.status(201).send(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
}
const conversationget = async (req, res) => {
  
    const { userId } = req.body;
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          chats: {
            include: {
              participants: {
                select: {
                  id: true,
                  name: true,
                  lastName: true,
                  businessName:true,
                  image :true ,
                  
                }
              },
              
            }
          }
        }
      });
  
      if (user) {
        return res.status(200).json(user.chats);
      } else {
        return res.status(200).json([]); 
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  }
  



module.exports = { Chatid, getmessage ,conversationget};