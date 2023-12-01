const Http = require("http");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require('body-parser');
const compression = require("compression");
const constants = require('./helper/utilities/constants');
// require("../server/config/db.connection");

let app = express();

app
  .use(logger("dev"))
  .use(express.static(path.join(__dirname, "../client/assets"), {
    // Cache will save for one day in users browser . . .
    maxAge: 86400000,
  }))
  .use(express.json({ limit: "100mb" }))
  .use(express.urlencoded({ extended: true, limit: "100mb", parameterLimit: 1000000 }))
  .use(cookieParser())
  .use(compression())
  .disable("x-powered-by")
  .use((req, res, next) => {
    if (req.get('x-amz-sns-message-type')) {
      req.headers['content-type'] = 'application/json';
    }
    next();
  })
  .use(bodyParser.json({ limit: '50mb' }))
  .use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
  .use("", require("./routes/components.js"))
  .use("/common", require("./routes/common.js"))
  .use("/communication", require("./routes/communication.js"))
  .use((request, response, next) => {
    if (request.get('x-amz-sns-message-type')) {
      request.headers['Content-Type'] = 'application/json';
    }

    response.header("Access-Control-Allow-Origin", "https://jiten.tech"); // allow requests from all origins
    response.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    response.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, refreshToken"
    );
    // response.header("Content-Type: application/json", true);
    next();
  })
  .use((req, res, next) => {
    next(createError(404));
  });

app.listen(constants.port.SERVER_PORT, () => {
  console.log(`Main server is running on at http://localhost:${constants.port.SERVER_PORT}`);
});

Http.createServer(app);
