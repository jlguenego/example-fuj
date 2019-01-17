const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, 'kiki.txt');

fs.appendFile(filename, 'hello1\n', () => {
	fs.appendFile(filename, 'hello2\n', () => {
		fs.appendFile(filename, 'hello3\n', () => {
			fs.appendFile(filename, 'hello4\n', () => {
			});
		});
	});
});
