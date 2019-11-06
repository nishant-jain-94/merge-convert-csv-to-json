const async = require('async');

const { concatFiles } = require('./concatFiles');
const { listToMapBy } = require('./listToMap');
const { writeToFile } = require('./writeToFile');

const mergeUsers = (userFiles, mergedUsersFilePath, cb) =>
  async.waterfall([
    concatFiles(userFiles),
    listToMapBy('email'),
    writeToFile(mergedUsersFilePath),
  ], cb);

module.exports = { mergeUsers };
