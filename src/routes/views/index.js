/* eslint-disable linebreak-style */
/* eslint-disable import/no-dynamic-require */
const glob = require('glob');
const path = require('path');

module.exports = function (app) {
  glob.sync('./src/routes/**/*.js').forEach((file) => {
    if (!file.includes('index.js')) {
      // eslint-disable-next-line global-require
      const pathResolve = require(path.resolve(file));
      pathResolve(app);
    }
  });
};
