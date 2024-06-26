const fs = require('fs')
const path = require('path')
const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
const email = require("../../helper/common/email")
const commonDao = require('../../dao/common/common');


// Communication related routes . . .
// Send email to developer . . .
module.exports.sendEmailToDeveloper = async function (req, res) {
    try {
        var emailData = JSON.parse(req.query.data);

        //Obj to save in Mongo DB
        var emailObj = {
            name: emailData.name,
            email: emailData.email,
            subject: emailData.subject,
            message: emailData.message,
        }

        const file = req.file;
        var fileName = false;

        if (file) {
            fileName = file.originalname;
            emailObj.photoName = fileName;

            // Read the file content
            const fileContent = fs.readFileSync(file.path);

            // Specify the destination directory and filename
            const destinationFileName = file.originalname;

            // Construct the full path
            const destinationDirectory = path.join(__dirname, '../../temporary/files/')
            const destinationPath = path.join(destinationDirectory, destinationFileName);

            // Create the destination directory if it doesn't exist
            if (!fs.existsSync(destinationDirectory)) {
                fs.mkdirSync(destinationDirectory, { recursive: true });
            }

            // Write the file to the destination directory
            fs.writeFileSync(destinationPath, fileContent);

            // Optionally, you can delete the temporary file if needed
            fs.unlinkSync(file.path);
        }
        await email.sendMail(JSON.parse(req.query.data), fileName);

        //Store data in database.
        await commonDao.saveEmailInfo(emailObj);
        res.status(httpStatus.OK).json({ message: constants.serverError.EMAIL_SEND });
    } catch (error) {
        console.error(`Error occurs while sending email to developer : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}


// Fetch email list . . .
module.exports.fetchEmailList = async function (req, res) {
    try {
        let emailList = await commonDao.fetchAllEmailInfo();
        res.status(httpStatus.OK).json({ emails: emailList });
    } catch (error) {
        console.error(`Error occurs while sending email list : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}



// Communication related routes for Ashu . . .
module.exports.sendEmailToDevashu = async function (req, res) {
    try {

        //Obj to save in Mongo DB
        var emailObj = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            receiver: constants.receiver.ASHU,
        }

        await email.sendMailToAshu(emailObj);

        //Store data in database.
        await commonDao.saveAshuEmailInfo(emailObj);
        res.status(httpStatus.OK).json({ message: constants.serverError.EMAIL_SEND });
    } catch (error) {
        console.error(`Error occurs while sending email to Ashu : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}

// fetching ashu email list . . .
module.exports.fetchAshuEmailList = async function (req, res) {
    try {
        let emailList = await commonDao.fetchAllAshuEmailInfo();
        res.status(httpStatus.OK).json({ emails: emailList });
    } catch (error) {
        console.error(`Error occurs while sending email list : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}


// Communication related routes for OffCodes Studio . . .
module.exports.sendEmailToOffCodes = async function (req, res) {
    try {

        //Obj to save in Mongo DB
        var emailObj = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            receiver: constants.receiver.OFFCODE_STUDIO,
        }

        await email.sendMailToOffCodes(emailObj);

        //Store data in database.
        await commonDao.saveOffCodesEmailInfo(emailObj);
        res.status(httpStatus.OK).json({ message: constants.serverError.EMAIL_SEND });
    } catch (error) {
        console.error(`Error occurs while sending email to OffCodes : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}

// fetching OffCodes Studio email list . . .
module.exports.fetchOffCodesEmailList = async function (req, res) {
    try {
        let emailList = await commonDao.fetchAllOffCodesEmailInfo();
        res.status(httpStatus.OK).json({ emails: emailList });
    } catch (error) {
        console.error(`Error occurs while sending email list : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}