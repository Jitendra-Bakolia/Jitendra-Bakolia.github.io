const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
// Communication related routes . . .


module.exports.sendEmailToDeveloper = async function (req, res) {
    try {
        console.log("🙈 🙉 🙊 Line 8 ~ req.body :  ",req.body);
        res.status(httpStatus.OK).json({message: constants.serverError.EMAIL_SEND});
    } catch (error) {
        console.error(`Error occurs while sending email to developer : `, error);
        res.status(httpStatus.SERVER_ERROR).json({message: constants.serverError.INTERNAL_SERVER_ERROR});
    }
}