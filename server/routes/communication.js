const express = require("express");
const router = express.Router();
const communication = require('../controller/common/communication')


// All Communication routes . . . 
router.post("/send-email-to-developer", communication.sendEmailToDeveloper);


module.exports = router;