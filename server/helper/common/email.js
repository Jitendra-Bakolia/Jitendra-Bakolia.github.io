const nodemailer = require('nodemailer');
const path = require('path');
const constants = require("../utilities/constants");
const emailTemplate = require('../common/email-templates');
const commonHelper = require('../../helper/common/common') 

module.exports.sendMail = async function (emailData, fileName) {

    // Create a transporter using email service credentials
    const transporter = await exports.createTransport();

    // Setting email heading . . . 
    emailData.heading = constants.emailHeading.FROM_JITEN_TECH

    // Set up the email options . . . 
    const mail = await exports.mailOptions(emailData, constants.emailType.SEND_TO_DEVELOPER, constants.imagePath.LOGO, fileName);

    // Send the email
    transporter.sendMail(mail, (error, info) => {
        if (error) {
            console.error(error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
            commonHelper.deleteAllFilesInFolder(constants.deleteFile.IMAGES);
            setTimeout(() => {
                commonHelper.deleteAllFilesInFolder(constants.deleteFile.BINARY);
            }, 1000);
            return true
        }
    });

}

module.exports.createTransport = async function () {
    return nodemailer.createTransport({
        host: constants.emailInfo.PROVIDER_HOST,
        port: constants.emailInfo.PROVIDER_PORT,
        auth: {
            user: constants.emailInfo.PROVIDER_USERNAME,
            pass: constants.emailInfo.PROVIDER_PASSWORD,
        }

    });
}

module.exports.mailOptions = async function (emailData, type, imageLogo, fileName) {

    var fileData = [];
    var fileRoot = path.join(__dirname + '../../../temporary/files')

    if (fileName) {
        fileData = [
            {
                filename: fileName,
                path: fileRoot + '/' + fileName,
            }
        ]
    }

    let message = await emailTemplate.emailTemplate(emailData, type, imageLogo);
    return mailOptions = {
        from: `${emailData.name} ${constants.emailInfo.PROVIDER_USERNAME}`,
        to: constants.emailInfo.DEVELOPER_EMAIL,
        subject: emailData.subject ? emailData.subject : "Received From Devashu.me",
        html: message,
        attachments: [
            {
                filename: 'logo.png', //! Name of the file as we want it to appear in the email
                path: constants.path.IMAGE_ROOT + imageLogo, //! Path of image
                cid: 'logo',
            },
            ...fileData
        ]
    };
}


// Email send to Devashu . . .
module.exports.sendMailToAshu = async function (emailData) {

    // Create a transporter using email service credentials
    const transporter = await exports.createTransport();

    // Setting email heading . . . 
    emailData.heading = constants.emailHeading.FROM_DEVASHU

    // Set up the email options . . . 
    const mail = await exports.mailOptions(emailData, constants.emailType.SEND_TO_DEVELOPER, constants.imagePath.LOGO);

    // Send the email
    transporter.sendMail(mail, (error, info) => {
        if (error) {
            console.error(error);
            return false;
        } else {
            console.log('Ashu - Email sent: ' + info.response);
            return true
        }
    });

}