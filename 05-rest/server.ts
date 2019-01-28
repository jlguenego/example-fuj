import * as express from 'express';
import * as serveIndex from 'serve-index';

import { ws } from './ws';
import { HTTPSServer } from './https';

const port = 9000;

const app = express();
app.use('/ws', ws);
app.use(express.static('www'));
app.use(serveIndex('www', { icons: true }));
app.listen(port, () => console.log('Server started on port', port));

new HTTPSServer().start(9443, app);


