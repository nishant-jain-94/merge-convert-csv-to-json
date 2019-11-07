const _ = require('lodash');

const { getLogger } = require('./logger');

const log = getLogger('keyBy');
const keyBy = (key) => (list, cb) => {
  log.trace(`Key the list using ${key}`);
  try {
    const keyedCollection = _.keyBy(list, key);
    cb(null, keyedCollection);
  } catch (err) {
    log.error(err);
    cb(err);
  }
};

module.exports = { keyBy };
