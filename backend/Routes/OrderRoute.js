const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Order");


router.post("/addorder",POST);
router.get("/getorders",GET);
router.get("/getorderbyuserId/:userId",GETById);
router.put("/updateorder",UPDATE);
router.delete("/deleteorder",DELETE) 


module.exports= router 