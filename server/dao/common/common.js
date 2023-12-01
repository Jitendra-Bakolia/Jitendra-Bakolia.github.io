const dbConfig = require("../../config/config");
const model = require("../../models/models");

dbConfig.dbConnection();

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}


exports.fetchAllEmailInfo = async function () {
    return await model.email.find().sort({ _id: -1 }).limit(10);
}