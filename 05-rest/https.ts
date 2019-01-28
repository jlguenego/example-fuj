import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

type RequestListener = (
    req: import("http").IncomingMessage,
    res: import("http").ServerResponse) => void;

export class HTTPSServer {
    start(port: number, app: RequestListener) {
        const directory = path.resolve(__dirname, './config-https/out');
        const keyFile = path.resolve(directory, 'server.key');
        const crtFile = path.resolve(directory, 'server.crt');
        const foundCertificate = fs.existsSync(keyFile) && fs.existsSync(crtFile);
        if (!foundCertificate) {
            console.log('Certificate not found. Cannot start HTTPS Server');
            return;
        }

        const privateKey = fs.readFileSync(keyFile, 'utf8');
        const certificate = fs.readFileSync(crtFile, 'utf8');
        const credentials = { key: privateKey, cert: certificate };
        
        const httpsServer = https.createServer(credentials, app);

        httpsServer.listen(port, function () {
            console.log('HTTPS server started on port ' + port);
        });
    }

}