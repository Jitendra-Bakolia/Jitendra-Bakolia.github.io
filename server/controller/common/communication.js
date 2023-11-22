const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
// Communication related routes . . .


module.exports.sendEmailToDeveloper = async function (req, res) {
    try {
        console.log("🙈 🙉 🙊 Line 8 ~ req.body :  ",req.body);
        console.log("🙈 🙉 🙊 Line 9 ~ req.query :  ",req.query);
        console.log("🙈 🙉 🙊 Line 10 ~ req.param :  ",req.param);
        res.status(httpStatus.OK).json({Data : "Testing . . . "});
    } catch (error) {
        console.error(`Error occurs while sending email to developer : `, error);
        res.status(httpStatus.SERVER_ERROR).send(constants.serverError.INTERNAL_SERVER_ERROR);
    }
}