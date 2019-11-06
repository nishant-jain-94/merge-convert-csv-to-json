const listToMapBy = id => (list, cb) => {
  const result = list.reduce((acc, listItem) => {
    acc[listItem[id]] = listItem;
    return acc;
  }, {});
  cb(null, result);
};

module.exports = { listToMapBy };