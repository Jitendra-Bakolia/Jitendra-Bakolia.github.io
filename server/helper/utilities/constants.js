const os = require("os")
const port = {
    SERVER_PORT: os.hostname() == "srv-clderojmot1c73dnopd0-hibernate-5ff89db98f-w86fc" ? 3000 : 3005,
}

const path = {
    CLIENT: "../client",
    COMPONENT: "../client/src/components"
}

const page = {
    INDEX: "index.html",
    STIKKUM: "stikkum.html",
    SMART_CONTECT_MANAGER: "smartcontectmanager.html",
    BEGENIEUS: "begenieus.html",
    NEDIAZ: "nediaz.html",
    WEBTECH: "webtech.html",
}

const serverError = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    EMAIL_SEND: "Email sent successfully.",
}

module.exports = {
    port,
    path,
    page,
    serverError
};