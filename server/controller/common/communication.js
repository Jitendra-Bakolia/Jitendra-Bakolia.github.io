const fs = require('fs')
const path = require('path')
const httpStatus = require('../../helper/utilities/http-status');
const constants = require('../../helper/utilities/constants');
const email = require("../../helper/common/email")

// Communication related routes . . .



module.exports.sendEmailToDeveloper = async function (req, res) {
    try {
        const file = req.file;
        var fileName = false;

        if (file) {
            fileName = file.originalname;

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
        res.status(httpStatus.OK).json({ message: constants.serverError.EMAIL_SEND });
    } catch (error) {
        console.error(`Error occurs while sending email to developer : `, error);
        res.status(httpStatus.SERVER_ERROR).json({ message: constants.serverError.SOMTHING_WENT_WRONG });
    }
}