const  express =require ("express")
const {addToCart, getCart }  = require  ("../controller/cart");

 const router = express.Router() ;
router.post("/addtocart",addToCart);
router.get("/getcart/:userId",getCart);

module.exports= router