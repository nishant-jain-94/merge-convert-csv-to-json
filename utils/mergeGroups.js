const async = require('async');

const { concatFiles } = require('./concatFiles');
const { listToMapBy } = require('./listToMap');
const { writeToFile } = require('./writeToFile');

const mergeGroups = (groupFiles, mergedGroupsFilePath, cb) =>
  async.waterfall([
    concatFiles(groupFiles),
    listToMapBy('group_name'),
    writeToFile(mergedGroupsFilePath),
  ], cb);

module.exports = { mergeGroups };
