const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/FavouriteItem");


router.post("/addfavourite",POST);
router.get("/getfavourites",GET);
router.get("/getfavourite/:userId",GETById);
router.put("/updatefavourite",UPDATE);
router.delete("/deletefavourite/:id",DELETE) 


module.exports= router 