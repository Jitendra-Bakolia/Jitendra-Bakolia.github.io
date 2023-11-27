const path = require("path");
const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
const clientPath = path.resolve(__dirname, '../../');
// Common component routes . . .

// Main Index file . . . 
module.exports.mainIndexPage = async function (req, res) {
    try {
        const indexPath = path.join(clientPath, constants.path.CLIENT, constants.page.INDEX);
        res.status(httpStatus.OK).sendFile(indexPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.INDEX}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}

// Stikkum Page . . .
module.exports.stikkumPage = async function (req, res) {
    try {
        const stikkumPath = path.join(clientPath, constants.path.COMPONENT, constants.page.STIKKUM);
        res.status(httpStatus.OK).sendFile(stikkumPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.STIKKUM}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}


// SmartContectManager Page . . .
module.exports.smartContectManager = async function (req, res) {
    try {
        const smartContectManagerPath = path.join(clientPath, constants.path.COMPONENT, constants.page.SMART_CONTECT_MANAGER);
        res.status(httpStatus.OK).sendFile(smartContectManagerPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.SMART_CONTECT_MANAGER}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}


// BeGenieUs Page . . .
module.exports.beGenieUs = async function (req, res) {
    try {
        const beGenieUsPath = path.join(clientPath, constants.path.COMPONENT, constants.page.BEGENIEUS);
        res.status(httpStatus.OK).sendFile(beGenieUsPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.BEGENIEUS}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}

// Nediaz Page . . .
module.exports.nediaz = async function (req, res) {
    try {
        const nediazPath = path.join(clientPath, constants.path.COMPONENT, constants.page.NEDIAZ);
        res.status(httpStatus.OK).sendFile(nediazPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.NEDIAZ}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}


// webTech Page . . .
module.exports.webTech = async function (req, res) {
    try {
        const webTechPath = path.join(clientPath, constants.path.COMPONENT, constants.page.WEBTECH);
        res.status(httpStatus.OK).sendFile(webTechPath);
    } catch (error) {
        console.error(`Error occurs while serving ${constants.page.WEBTECH}:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}

module.exports.downloadResume = async function (req, res) {
    try{
        const resumePath = path.join(__dirname, '../../../client/assets/img/resume/Jitendra.pdf');
        res.status(httpStatus.OK).download(resumePath);
    } catch (error) {
        console.error(`Error occurs while downloading resume:`, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}