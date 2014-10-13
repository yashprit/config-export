'use strict';

var
  fs   = require('fs'),
  path = require('path');

module.exports = function (dir) {
  if(!dir) {
     throw new Error("No Directory provided to load files");
  }
  var requires = {};
  var files = fs.readdirSync(dir);

  files.forEach(function (file) {
    // ignore index.js and files prefixed with underscore and
    if (!(file === 'index.js' || file[0] === '_')) {

      var filepath = path.resolve(path.join(dir, file)),
        ext = path.extname(file),
        stats = fs.statSync(filepath);

      // don't require non-javascript files (.txt .md etc.)
      if (stats.isFile() && !(ext in require.extensions)) {
        return;
      }

      var basename = path.basename(file, ext);
      requires[basename] = require(filepath);
    }
  });
  return requires;
};
