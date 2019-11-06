const async = require('async');
const { csvToJson } = require('./csvToJson');

const concatFilesCb = callback => (err, values) => callback(err, values);

const concatFiles = files => callback => 
  async.concat(files, csvToJson, concatFilesCb(callback));

module.exports = { concatFiles, concatFilesCb };
