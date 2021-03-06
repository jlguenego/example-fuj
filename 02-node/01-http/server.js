const http = require('http');

const port = 9000;

const server = http.createServer((req, res) => {
    const domain = req.headers.host;
    const url = `http://${domain}${req.url}`;
    const html = `
<html>
<head>
    <title>My beautiful web server</title>
</head>
<body>
    <b>Hello, url = ${url}</b>
</body>
</html>
    `
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.end(html, 'utf8');
});

server.listen(port, () => {
	console.log('Server started on port', port);
});
