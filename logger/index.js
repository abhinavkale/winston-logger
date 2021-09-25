const newpracLogger = require("./newpracLogger");
const productionLogger = require("./productionLogger");
let logger = null;

if (process.env.NODE_ENV === "practienv") {
  logger = newpracLogger();
}

if (process.env.NODE_ENV === "production") {
  logger = productionLogger();
}

module.exports = logger;
