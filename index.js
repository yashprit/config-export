'use strict';

var
  fs = require('fs'),
  path = require('path'),
  _ = require('');

module.exports = function(dir) {
  var args = Array.prototype.splice.call(arguments);
  //first argument has to be dir
  var dir = args[0];

  //second argument could be files that need to be exluded from system
  var exludedFiles = args[1];
  var requires = {};

  if (!dir) {
    throw new Error("No Directory provided to load files");
  }

  //get all files from provided directory
  var files = fs.readdirSync(dir);

  if (exludedFiles) {
    files = _.difference(files, exludedFiles);
  }

  files.forEach(function(file) {
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
