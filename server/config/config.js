const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB connection established');
    })
    .catch(error => {
        console.error('Could not establish mongoose connection', error);
    });

mongoose.set('debug', true);


module.exports = mongoose;