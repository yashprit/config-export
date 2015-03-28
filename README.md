#  config-export [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Yet another NPM package for exporting all files inside the directory


## Install

```sh
$ npm install --save config-export
```


## Getting Started

Create `index.js` file inside your directory, which you want to `require`. e.g.

```sh
├── app
│   ├── controllers
│   │   └── index.js
│   ├── dao
│   │   └── index.js
│   ├── express-config.js
│   ├── index.js
│   ├── middleware
│   │   ├── index.js
│   │   ├── role.js
│   ├── routes.js
│   ├── util
│   │   ├── db.js
│   │   ├── index.js
│   └── views
│       └── help
```

inside every `index.js` put following code
`module.exports = require('configexport')(__dirname);`
It finds all the files in the folder and adds them to the exports namespace.

If you need to excluded any file names it with `_` e.g. you don't want to export `private_config.js`, rename this with `_` `_private_config.js`



## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].

## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/config-export/issues
[npm-url]: https://npmjs.org/package/config-export
[npm-image]: https://badge.fury.io/js/config-export.svg
[travis-url]: https://travis-ci.org/yashprit/config-export
[travis-image]: https://travis-ci.org/yashprit/config-export.svg?branch=master

