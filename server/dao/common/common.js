const dbConf = require("../../config/db.config");
const model = require("../../models/models");

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}


exports.fetchAllEmailInfo = async function () {
    return await model.email.find().sort({ _id: -1 }).limit(10);
}