const fs = require('fs');

const writeToFile = fileName => (data, callback) => 
  fs.writeFile(fileName, JSON.stringify(data, null, 2), callback);

module.exports = { writeToFile };