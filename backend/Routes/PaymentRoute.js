const  express =require ("express")

const router = express.Router() ;

const  {AddPayment, GetAllPaymentCardsByUserId}= require("../controller/payment");
router.post("/addPayment",AddPayment);
router.get("/getAllByUserId/:userId",GetAllPaymentCardsByUserId)
module.exports= router 