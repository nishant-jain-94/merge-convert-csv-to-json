const async = require('async');

const { concatFiles } = require('./concatFiles');
const { keyBy } = require('./keyBy');
const { writeToFile } = require('./writeToFile');

const mergeUsers = (userFiles, mergedUsersFilePath, cb) => async.waterfall([
  concatFiles(userFiles),
  keyBy('email'),
  writeToFile(mergedUsersFilePath),
], cb);

module.exports = { mergeUsers };
