const express = require("express");

const router = express.Router();

const { POST, GET, GETById, UPDATE, DELETE } = require("../controller/Article");

router.post("/addarticle", POST);
router.get("/getarticles", GET);
router.get("/getarticle", GETById);
router.put("/updatearticle/:id", UPDATE);
router.delete("/deletearticle/:id", DELETE);

module.exports = router;
