const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, 'kiki.txt');

function appendFilePromise(filename, data) {
	return new Promise((resolve, reject) => {
		fs.appendFile(filename, data, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

appendFilePromise(filename, 'promise1\n')
	.then(() => appendFilePromise(filename, 'promise2\n'))
	.then(() => appendFilePromise(filename, 'promise3\n'))
	.then(() => appendFilePromise(filename, 'promise4\n'))
	.catch(e => console.log('error', e));
