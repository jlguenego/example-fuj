const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, 'kiki.txt');

fs.appendFileSync(filename, 'hello1\n');
fs.appendFileSync(filename, 'hello2\n');
fs.appendFileSync(filename, 'hello3\n');
fs.appendFileSync(filename, 'hello4\n');
