// replace config.js by config.docker.js
const fs = require('fs');
const path = require('path');

fs.copyFileSync(
    path.resolve(__dirname, '../../05-rest/config.docker.js'),
    path.resolve(__dirname, '../../05-rest/config.js'),
);