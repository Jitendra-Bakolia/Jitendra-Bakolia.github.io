const port = {
    SERVER_PORT: 3005,
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
}

module.exports = {
    port,
    path,
    page,
    serverError,
    emailInfo,
};