const root = require("path");

const port = {
    SERVER_PORT: 3005,
}

const path = {
    CLIENT: "../client",
    COMPONENT: "../client/src/components",

    IMAGE_ROOT: root.resolve(__dirname, '../../../client/assets/img'),
}

const page = {
    INDEX: "index.html",
    STIKKUM: "stikkum.html",
    SMART_CONTECT_MANAGER: "smartcontectmanager.html",
    BEGENIEUS: "begenieus.html",
    NEDIAZ: "nediaz.html",
    WEBTECH: "webtech.html",
    PORTFOLIO: "portfolio.html",
}

const serverError = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    EMAIL_SEND: "Your message has been sent. Thank you!",
    SOMTHING_WENT_WRONG: "Something went wrong!",
}

const emailInfo = {
    SERVICE_PROVIDER : 'smtp.gmail.com',
    // PROVIDER_USERNAME: 'testsupport@fusion24x7.com',
    PROVIDER_USERNAME: 'jitendrabakolia0@gmail.com',
    PROVIDER_PASSWORD: 'qjqd axzl nxah gmor',
    // PROVIDER_HOST: 'smtpout.secureserver.net',
    PROVIDER_HOST: 'smtp.gmail.com',
    // PROVIDER_PORT: 465,
    PROVIDER_PORT: 587,

    DEVELOPER_EMAIL: 'jitendrabakolia.dev@gmail.com',
    // DEVELOPER_EMAIL: 'jitenagami@gmail.com',
}

const emailType = {
    SEND_TO_DEVELOPER: 1
}

const emailHeading = {
    FROM_JITEN_TECH : "Email Received from Jiten.Tech"
}

const web = {
    JITEN : "https://jiten.tech"
}

const imagePath = {
    LOGO : "/logo-name-clear.png"
}

const deleteFile = {
    IMAGES: 1,
    BINARY: 2
}

const config = {
    DB_CONNECTION_URL: "mongodb+srv://bablubakolia:Jiten1998@cluster0.zcvupm0.mongodb.net/JitenTech?retryWrites=true&w=majority",
}

const status = {
    ACTIVE: 1,
    INACTIVE: 0,
    DELETED: 2,
}

const state = {
    ACTIVE: true,
    INACTIVE: false,
}

module.exports = {
    port,
    path,
    page,
    serverError,
    emailInfo,
    emailType,
    emailHeading,
    web,
    imagePath,
    deleteFile,
    config,
    status,
    state
};