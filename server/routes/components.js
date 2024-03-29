const express = require("express");
const router = express.Router();
const components = require('../controller/common/components')


// Load all required files . . . 

// Main Index page load . . . 
router.get("/", components.mainIndexPage);

// Modle page loadded . . . 
router.get("/get-stikkum-page", components.stikkumPage);
router.get("/get-smartcontectmanager-page", components.smartContectManager)
router.get("/get-begenieus-page", components.beGenieUs)
router.get("/get-nediaz-page", components.nediaz)
router.get("/get-webtech-page", components.webTech)
router.get("/get-portfolio-page", components.portFolio)
router.get("/get-agrocare-page", components.agroCare)

//Show all emails . . .
router.get("/show-emails", components.showEmails)

// Download Resume . . .
router.get("/download-resume", components.downloadResume);

//Show Ashu emails . . .
router.get("/show-ashu-emails", components.showAshuEmails)


module.exports = router;