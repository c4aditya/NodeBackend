
const express = require("express");

const router = express.Router();

// hander function uthaa ke lata hu controller me se 
const localFile = require("../controllers/localfileUploade");

router.post("/local",localFile);

// cloud pe image uplode ka controller 

const Cloud_Uploade_image = require('../controllers/Image_uploade_cloud')
router.post("/cloud_image_upload",Cloud_Uploade_image)
module.exports = router;