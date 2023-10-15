const express = require("express");

const router = express.Router();

const {
  POST,
  GET,
  GETBYID,
  UPDATE,
  DELETE,
} = require("../contro     ller/Adress");

router.post("/addadress", POST);
router.get("/getadresss", GET);
router.get("/getadressByUserId/:userId", GETBYID);

router.put("/updateadress", UPDATE);
router.delete("/deleteadress", DELETE);

module.exports = router;
