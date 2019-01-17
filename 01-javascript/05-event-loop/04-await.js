const fs = require('fs');
const path = require('path');
const util = require('util');

const filename = path.resolve(__dirname, 'kiki.txt');
const appendFile = util.promisify(fs.appendFile);

async function main() {
    try {
        await appendFile(filename, 'await1\n');
        await appendFile(filename, 'await2\n');
        await appendFile(filename, 'await3\n');
        await appendFile(filename, 'await4\n');
    } catch(e) {
        console.log('error', e);
    }
}

main();


