const express = require("express");
const {
  Verify,
  Sendverification,
  resetPassword,
  changePassword
} = require("../controller/reset-password");

const router = express.Router();
router.post("/reset-password/send", Sendverification);
router.post("/reset-password/verify", Verify);
router.put("/reset-password", resetPassword);
router.post("/change-password", changePassword);

module.exports = router;
