
const express = require("express");

const router = express.Router();

// hander function uthaa ke lata hu controller me se 
const localFile = require("../controllers/localfileUploade");

router.post("/local",localFile);

module.exports = router;