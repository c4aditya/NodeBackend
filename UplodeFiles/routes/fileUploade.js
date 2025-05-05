const express = require("express");
const router = express.Router();


// get all router function from controller

// const fileupload = require("../controller/fileUploade");

const localFileUploade = require("../controller/localFileUploade")

router.post("/localFileUploade",localFileUploade);

module.exports = router;

