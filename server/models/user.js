const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
    [
        {
            uid: {
                type: String
            },

            fullName: {
                type: String
            },

            email: {
                type: String
            },

            isActive: {
                type: Boolean, default: true
            },

            photoURL: {
                type: String
            },

            apiKey: {
                type: String
            },

            userType: {
                type: String, default: "C"
            },

            username: {
                type: String
            },

            password:
            {
                type: String
            },

        }
    ], { timestamps: true }
)

module.exports = { collectionSchema: userSchema, collectionName: "user" }

