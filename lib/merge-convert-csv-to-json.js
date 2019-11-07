const async = require('async');
const glob = require('glob');

const { keyBy } = require('./keyBy');
const { getLogger } = require('./logger');
const { concatFiles } = require('./concatFiles');
const { writeToFile } = require('./writeToFile');
const { assignToProperty } = require('./assignToProperty');

const log = getLogger('merge');

const mergeConvertCsv2Json = (options) => {
  const files = glob.sync(options.pattern);
  log.trace(`Enabling ConcatFiles Modules`);
  const modules = [concatFiles(files)];

  if (options.keyBy) {
    log.trace(`Enabling KeyBy module for the option ${options.keyBy}`);
    modules.push(keyBy(options.keyBy));
  }

  if (options.assignTo) {
    log.trace(`Enabling AssignTo Module for the option ${options.assignTo}`);
    modules.push(assignToProperty(options.assignTo));
  }

  log.trace(`Enabling writeToFile Module for the option ${options.outputTo}`);
  modules.push(writeToFile(options.outputTo));

  async.waterfall(modules, (err) => {
    if (err) {
      log.error(err);
    } else {
      log.info(`Files with pattern ${options.pattern} merged and convert to json at ${options.outputTo}`);
    }
  });
};

module.exports = { mergeConvertCsv2Json };
