const fs = require('fs');

const checkIfDirectoryExists = () => {
  if (!fs.existsSync(option.directory)) {
    const stats = fs.statSync(options.directory);
    if (!stats.isDirectory()) {
      throw new Error(`No directory exists in the following path ${valuesDirectory}`);
    }
  }
  return true;
};

module.exports = { checkIfDirectoryExists };
