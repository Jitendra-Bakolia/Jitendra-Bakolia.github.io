const dbConfig = require("../../config/config");
const model = require("../../models/models");

setTimeout(() => {
    dbConfig.dbConnection();
}, 5000);

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}


exports.fetchAllEmailInfo = async function () {
    return await model.email.find().sort({ _id: -1 }).limit(10);
}