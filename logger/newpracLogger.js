// const winston = require("winston");

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const newpractLogger = () => {
  return createLogger({
    level: "debug",
    // format: winston.format.json(),
    format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), myFormat),
    // defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      //   new winston.transports.File({ filename: "error.log", level: "error" }),
      //   new winston.transports.File({ filename: "combined.log" }),

      new transports.Console(),
    ],
  });
};

module.exports = newpractLogger;
