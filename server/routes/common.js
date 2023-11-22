const express = require("express");
const router = express.Router();
const commonController = require("../controller/common/common");

router.get("/test-function", commonController.testFunction)


module.exports = router;


