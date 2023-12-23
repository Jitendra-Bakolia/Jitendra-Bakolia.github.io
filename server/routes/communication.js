const express = require("express");
const router = express.Router();
const communication = require('../controller/common/communication')
const multer = require('multer');
const path = require("path");
const upload = multer({ dest: path.join(__dirname, '../temporary/upload/') });


// All Communication routes . . . 
router.post("/send-email-to-developer", [upload.single('file')], communication.sendEmailToDeveloper);
router.get("/fetch-email-list", communication.fetchEmailList);


// Communication routes for Ashu . . .
router.post("/send-email-to-devashu", communication.sendEmailToDevashu);
router.get("/fetch-ashu--email-list", communication.fetchAshuEmailList);

module.exports = router;