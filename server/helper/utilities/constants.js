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
    AGROCARE: "agrocare.html",
    EMAILS: "email-list.html",
    ASHU_EMAILS: "ashu-email-list.html",
}

const serverError = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    EMAIL_SEND: "Your message has been sent. Thank you!",
    SOMTHING_WENT_WRONG: "Something went wrong!",
}

const receiver = {
    JITEN: 1,
    ASHU: 2,

}

const emailInfo = {
    SERVICE_PROVIDER: 'smtp.gmail.com',
    // PROVIDER_USERNAME: 'testsupport@fusion24x7.com',
    PROVIDER_USERNAME: 'jitendrabakolia0@gmail.com',
    PROVIDER_PASSWORD: 'qjqd axzl nxah gmor',
    // PROVIDER_HOST: 'smtpout.secureserver.net',
    PROVIDER_HOST: 'smtp.gmail.com',
    // PROVIDER_PORT: 465,
    PROVIDER_PORT: 587,

    DEVELOPER_EMAIL: 'jitendrabakolia.dev@gmail.com',
    ASHU_EMAIL: 'bankashu74@gmail.com',
    // DEVELOPER_EMAIL: 'jitenagami@gmail.com',
}

const emailType = {
    SEND_TO_DEVELOPER: 1
}

const emailHeading = {
    FROM_JITEN_TECH: "Email Received from Jiten.Tech",
    FROM_DEVASHU: "Email Received from Devashu.me",
}

const web = {
    JITEN: "https://jiten.tech"
}

const imagePath = {
    LOGO: "/logo-name-clear.png"
}

const deleteFile = {
    IMAGES: 1,
    BINARY: 2
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

const subject = {
    ASHU_EMAIL: "Received From Devashu.me"
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
    status,
    state,
    receiver,
    subject
};