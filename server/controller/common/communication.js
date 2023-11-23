const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
const email = require("../../helper/common/email")
// Communication related routes . . .


module.exports.sendEmailToDeveloper = async function (req, res) {
    try {
        await email.sendMail(req.body);
        res.status(httpStatus.OK).json({ message: constants.serverError.EMAIL_SEND });
    } catch (error) {
        console.error(`Error occurs while sending email to developer : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}