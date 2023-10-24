const express = require("express");

const router = express.Router();

const {
  POST,
  GET,
  GETById,
  GETByUserId,
  UPDATE,
  DELETE,
} = require("../controller/Article");

router.post("/addarticle", POST);
router.get("/getarticles", GET);
router.get("/getarticle/:id", GETById);
router.get("/getarticlebyUserId/:id", GETByUserId);
router.put("/updatearticle/:id", UPDATE);
router.delete("/deletearticle/:id", DELETE);

module.exports = router;
