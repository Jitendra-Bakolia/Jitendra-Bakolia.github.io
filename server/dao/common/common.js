const model = require("../../models/models");

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}