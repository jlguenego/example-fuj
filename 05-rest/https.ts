import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as https from 'https';

type RequestListener = (
    req: import("http").IncomingMessage,
    res: import("http").ServerResponse) => void;

export class HTTPSServer {
    start(httpsPort: number, httpPort: number, app: RequestListener): boolean {
        const directory = path.resolve(__dirname, './config-https/out');
        const keyFile = path.resolve(directory, 'server.key');
        const crtFile = path.resolve(directory, 'server.crt');
        const foundCertificate = fs.existsSync(keyFile) && fs.existsSync(crtFile);
        if (!foundCertificate) {
            console.log('Certificate not found. Cannot start HTTPS Server');
            return false;
        }

        const privateKey = fs.readFileSync(keyFile, 'utf8');
        const certificate = fs.readFileSync(crtFile, 'utf8');
        const credentials = { key: privateKey, cert: certificate };

        const httpsServer = https.createServer(credentials, app);

        httpsServer.listen(httpsPort, function () {
            console.log('HTTPS server started on port ' + httpsPort);
        });

        http.createServer((req, res) => {
            console.log('req.url', req.url);
            const host = req.headers['host'].replace(/:.*$/, '');
            console.log('host', host);
            res.writeHead(301, { 
                Location: `https://${host}:${httpsPort}${req.url}`,
             });
            res.end();
        }).listen(httpPort, () => {
            console.log('HTTP server (redirect) started on port ' + httpPort);
        });
        return true;
    }

}