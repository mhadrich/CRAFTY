const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETByUserId,GETById,UPDATE,DELETE}= require("../controller/Order");


router.post("/addorder",POST);
router.get("/getorders",GET);
router.get("/getorderbyuserId/:id",GETByUserId);
router.get("/getorderbyId/:Id",GETById);
router.put("/updateorder",UPDATE);
router.delete("/deleteorder",DELETE) 


module.exports= router 