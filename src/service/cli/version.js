'use strict';

const packageJSON = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run: () => console.log(packageJSON.version),
};