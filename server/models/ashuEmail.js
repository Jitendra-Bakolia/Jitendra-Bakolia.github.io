const mongoose = require("mongoose");
const constants = require('../helper/utilities/constants');

let userSchema = new mongoose.Schema(
    [
        {
            uid: {
                type: String
            },

            name: {
                type: String
            },

            email: {
                type: String
            },

            isActive: {
                type: Boolean, default: constants.state.ACTIVE
            },

            subject: {
                type: String
            },

            message: {
                type: String
            },

            status: {
                type: Number, default: constants.status.ACTIVE
            },

            photoName: {
                type: String, default: null
            },

        }
    ], { timestamps: true }
)

module.exports = { collectionSchema: userSchema, collectionName: "ashuEmail" }

