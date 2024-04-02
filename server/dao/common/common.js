const model = require("../../models/models");

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}


exports.fetchAllEmailInfo = async function () {
    return await model.email.find().sort({ _id: -1 }).limit(10);
    
}

// Save ashu email . . .
exports.saveAshuEmailInfo = async function (data) {
    return await model.ashuEmail.create(data);
}

exports.fetchAllAshuEmailInfo = async function () {
    return await model.ashuEmail.find().sort({ _id: -1 }).limit(10);
    
}

// Save OffCodes Studio email . . .
exports.saveOffCodesEmailInfo = async function (data) {
    return await model.offCodesEmail.create(data);
}

exports.fetchAllOffCodesEmailInfo = async function () {
    return await model.offCodesEmail.find().sort({ _id: -1 }).limit(10);
    
}
