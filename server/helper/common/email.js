const nodemailer = require('nodemailer');
const constants = require("../utilities/constants");
const emailTemplate = require('../common/email-templates');

module.exports.sendMail = async function (emailData) {

    // Create a transporter using email service credentials
    const transporter = await exports.createTransport();

    // Setting email heading . . .
    emailData.heading = constants.emailHeading.FROM_JITEN_TECH

    // Set up the email options
    const mail = await exports.mailOptions(emailData, constants.emailType.SEND_TO_DEVELOPER);

    // Send the email
    transporter.sendMail(mail, (error, info) => {
        if (error) {
            console.error(error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
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

module.exports.mailOptions = async function (emailData, type) {
    let message = await emailTemplate.emailTemplate(emailData, type);
    return mailOptions = {
        from: `${emailData.name} ${constants.emailInfo.PROVIDER_USERNAME}`,
        to: constants.emailInfo.DEVELOPER_EMAIL,
        subject: emailData.subject,
        html: message,
    };
}