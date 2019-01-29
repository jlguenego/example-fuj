import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as url from 'url';


import { ws } from './ws';
import { HTTPSServer } from './https';

const port = 9000;

const app = express();
app.use('/ws', ws);
app.use((req, res, next) => {
    const path = url.parse(req.url).pathname;
    if (!path.match(/\.(css|js|html|jpg|png|gif|svg)$/i)) {
        res.sendFile('index.html', { root: 'www' });
        return;
    }
    next();
});
app.use(express.static('www'));
app.use(serveIndex('www', { icons: true }));

const status = new HTTPSServer().start(9443, 9000, app);

if (!status) {
    // HTTP Only.
    app.listen(port, () => console.log('Server started on port', port));
}

