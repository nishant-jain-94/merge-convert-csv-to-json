const async = require('async');

const { getLogger } = require('./logger');
const { csvToJson } = require('./csvToJson');

const log = getLogger('concatFiles');

const concatFilesCb = (callback) => (err, values) => callback(err, values);

const concatFiles = (files) => (callback) => {
  log.trace('Resolved to the following files:');
  files.forEach((file) => log.trace(file));
  return async
    .concat(files, csvToJson, concatFilesCb(callback));
};

module.exports = { concatFiles, concatFilesCb };
