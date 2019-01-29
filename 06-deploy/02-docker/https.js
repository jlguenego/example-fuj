// replace config.js by config.docker.js
const fs = require('fs');
const path = require('path');

const target = process.argv[2];

console.log('target', target);

fs.copyFileSync(
    path.resolve(__dirname, `../../05-rest/config.${target}.ts`),
    path.resolve(__dirname, '../../05-rest/config.ts'),
);