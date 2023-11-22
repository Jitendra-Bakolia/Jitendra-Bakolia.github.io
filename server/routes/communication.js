const express = require("express");
const router = express.Router();
const communication = require('../controller/common/communication')


// All Communication routes . . . 
router.get("/send-email-to-developer", communication.sendEmailToDeveloper);


module.exports = router;