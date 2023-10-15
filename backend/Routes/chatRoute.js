const  express =require ("express")
const {Chatid,getmessage,conversationget}  = require  ("../controller/chat ");

 const router = express.Router() ;
router.post("/getId",Chatid);
router.post("/getmessage",getmessage);
router.post("/conversation",conversationget     )
module.exports= router