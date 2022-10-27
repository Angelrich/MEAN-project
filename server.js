const http = require('http'); //default node js package
const app = require('./backend/app');
const debug = require("debug")("node-angular");

const normalizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe" + port : "port" + port;
  switch (error.code) {
    case "EACCESS":
      console.error(bind + "requires elevated privileges");
      process.exit();
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe" + port : "port" + port;
  debug("Listening on" + bind);
}

const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);
const server = http.createServer(app);
server.on("listening", onListening);
server.listen(port); //generally used port for development
