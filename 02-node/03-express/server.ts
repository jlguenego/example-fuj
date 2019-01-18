import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as fs from 'fs';

const port = 9000;
const context = { time: () => new Date() };

const app = express();
app.set('views', './tmpl');
app.set('view engine', 'ejs');
app.get('**', function (req, res, next) {
    if (fs.existsSync('./tmpl' + req.url + '.ejs')) {
        res.render('.' + req.url, context);
        return;
    }
    next();
});
app.use(express.static('www'));
app.use(serveIndex('www', { icons: true }));
app.listen(port, () => console.log('Server started on port', port));

