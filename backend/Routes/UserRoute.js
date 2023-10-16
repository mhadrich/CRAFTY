const  express =require ("express")

const router = express.Router() ;

const  {GET,GETBYEMAIL,GETBYID,UPDATE,DELETE}= require("../controller/User_RUD");


router.get("/getusers",GET);
router.get("/getuserByEmail/:email",GETBYEMAIL);
router.get("/getuserById",GETBYID)
router.put("/updateuser/:id",UPDATE);
router.delete("/deleteuser/:id",DELETE) 


module.exports= router 