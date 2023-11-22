const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');


module.exports.testFunction = async function (req, res) {
        try {
                res.status(httpStatus.OK).json({message : "Message. . .Working"})
        } catch (error) {
                console.error(`Error occurs while serving ${constants.page.NEDIAZ}:`, error);
                res.status(httpStatus.SERVER_ERROR).json({message : "Error . . ."})
        }
}