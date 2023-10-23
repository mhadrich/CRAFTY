const express = require("express");
const authroute = require("./Routes/authRoute.js");
const resertRroute = require("./Routes/reset-password-routes.js");
const ItemRoute = require('./Routes/ItemRoute.js')
const ArticleRoute = require('./Routes/ArticleRoute.js')
const OrderRoute = require('./Routes/OrderRoute.js')
const MaterialRoute = require('./Routes/MaterialRoute.js')
const CommentRoute = require('./Routes/CommentRoute.js')
const ImageRoute = require('./Routes/ImageRoute.js')
const ReviewRoute = require('./Routes/ReviewRoute.js')
const TagRoute = require('./Routes/TagRoute.js')
const UserRoute = require('./Routes/UserRoute.js')
const AdressRoute = require('./Routes/AdressRoute.js')
const NotificationRoute = require('./Routes/NotificationRoute.js')
const FavouriteItemRoute = require('./Routes/FavouriteItemRoute.js')
const WishlistRoute = require('./Routes/WishlistRoute.js')
const ChatRoute = require('./Routes/chatRoute.js')
const CartRoute =require('./Routes/CartRoutes.js')




const socket_io = require("socket.io");
const http = require("http");
const app = express();
const PORT = 4000;

const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/auth", authroute);
app.use("/reset", resertRroute);
const server = http.createServer(app);
const io = socket_io(server);
const prisma = require("./lib/prisma.js");

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinChat", async ({ userId, otherUserId }) => {
    const chat = await prisma.chat.findFirst({
      where: {
        AND: [
          { participants: { some: { id: userId } } },
          { participants: { some: { id: otherUserId } } },
        ],
      },
    });

    if (!chat) {
      const newChat = await prisma.chat.create({
        data: {
          participants: { connect: [{ id: userId }, { id: otherUserId }] },
        },
      });
      socket.join(newChat.id.toString());
    } else {
      socket.join(chat.id.toString());
    }
  });

  socket.on("sendMessage", async ({ chatId, userId, text }) => {
    console.log("🚀 ~ file: index.js:93 ~ socket.on ~ text:", text);

    try {
      const message = await prisma.message.create({
        data: {
          text,
          sender: userId,
          chatId: chatId * 1,
        },
      });

      io.to(chatId).emit("message", message);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});
app.use("/cart",CartRoute);
 app.use("/item",ItemRoute);
app.use("/article",ArticleRoute);
app.use("/order",OrderRoute);
app.use("/material",MaterialRoute);
app.use("/comment",CommentRoute);
app.use("/image",ImageRoute);
app.use("/review",ReviewRoute);
app.use("/tag",TagRoute);
app.use("/user",UserRoute);
app.use("/adress",AdressRoute);
app.use("/notification",NotificationRoute);
app.use("/favourite",FavouriteItemRoute);
app.use("/wishlist",WishlistRoute);
app.use("/chat",ChatRoute);

server.listen(PORT, () => {
  console.log(`listening on port :  ${PORT}`);
});

module.exports = { io };
