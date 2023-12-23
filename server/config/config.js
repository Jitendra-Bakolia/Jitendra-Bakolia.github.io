const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(() => {
        console.log('DB connection established');
    })
    .catch(error => {
        console.error('Could not establish mongoose connection', error);
    });

mongoose.set('debug', true);


module.exports = mongoose;