const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,GETByUserId,UPDATE,DELETE}= require("../controller/Item");


router.post("/additem",POST);
router.get("/getitems",GET);
router.get("/getitem",GETById);+
router.get("/getitembyUserId/:id", GETByUserId);
router.put("/updateitem",UPDATE);
router.delete("/deleteitem",DELETE) 


module.exports= router 