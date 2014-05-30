"use stricts";

var winston = require('winston');

var logLevels = {
  levels: {
    debug: 0,
    warn: 1,
    activity: 2,
    info: 3,
    error: 4
  },
  colors: {
    debug: 'yellow',
    warn: 'orange',
    activity: 'blue',
    info: 'white',
    error: 'red'
  }
};

var logger = null;

module.exports.getLogger = function () {

  if (!logger) {
    logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({
          level: 'debug',
          timestamp: true,
          colorize:true
        })
      ],
      levels: logLevels.levels
    }); 

    winston.addColors(logLevels.colors);

  }

  return logger;

}

