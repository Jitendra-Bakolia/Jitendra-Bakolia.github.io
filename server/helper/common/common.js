const fs = require('fs')
const path = require('path')
const constants = require('../../helper/utilities/constants');

// Communication related routes . . .


module.exports.deleteAllFilesInFolder = async function (deleteFile) {
    try {
      var folderPath = '';

      if (deleteFile == constants.deleteFile.IMAGES) {
        folderPath = path.join(__dirname + "../../../temporary/files");
      } else if (deleteFile == constants.deleteFile.BINARY) {
        folderPath =  path.join(__dirname + "../../../temporary/upload")
      }

      // Get a list of all files in the folder
      const files = fs.readdirSync(folderPath);
      console.log(`🙈 🙉 🙊 ~ file: common.js:20 ~ module.exports.deleteAllFilesInFolder ~ files : `, files)
  
      // Iterate through the files and delete each one
      files.forEach((file) => {
        const filePath = path.join(folderPath, file);
  
        // Use unlinkSync to delete the file
        fs.unlinkSync(filePath);
      });

      console.log("🙈 🙉 🙊 Line 29 ~  : All files removed ");
      console.log("🙈 🙉 🙊 Line 31 ~  :  ",fs.readdirSync(folderPath));

    } catch (error) {
      console.error('Error deleting files: function deleteAllFilesInFolder ', error);
    }
  }