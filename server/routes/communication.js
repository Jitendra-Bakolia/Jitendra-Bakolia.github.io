const express = require("express");
const router = express.Router();
const communication = require('../controller/common/communication')
const multer = require('multer');
const path = require("path");
const upload = multer({ dest: path.join(__dirname, '../temporary/upload/') });


// All Communication routes . . . 
router.post("/send-email-to-developer", [upload.single('file')], communication.sendEmailToDeveloper);


module.exports = router;