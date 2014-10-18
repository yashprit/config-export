#configexport

###NodeJS, Yet another NPM package for exporting all files inside the directory.

#Getting Started

Install the module with: `npm install configexport`

Create `index.js` file inside your directory, which you want to `require`. e.g.

```
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

inside every `index.js` this code `module.exports = require('configexport')(__dirname);
` It finds all the files in the folder and adds them to the exports namespace.

If you need to excluded any file names it with `_` e.g. you don't want to export `private_config.js`, rename this with `_` `_private_config.js`


##Configuration
//wip
