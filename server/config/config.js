const constants = require('../helper/utilities/constants');
const mongoose = require('mongoose');


console.log(`🙈 🙉 🙊 ~ file: config.js:5 ~ process.env.DB_CONNECTION_URL : `, process.env.DB_CONNECTION_URL)
console.log("🙈 🙉 🙊 Line 6 ~  :  ",constants.config.DB_CONNECTION_URL);

mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connection established');
  })
  .catch(error => {
    console.error('Could not establish mongoose connection', error);
  });

mongoose.set('debug', true);

// module.exports = mongoose;