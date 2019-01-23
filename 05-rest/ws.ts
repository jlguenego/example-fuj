import * as express from 'express';
import * as mongoose from 'mongoose';
import { rest } from './rest';

const app = express.Router();
export const ws = app;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	console.log('ws call', req.url);
	next();
});

app.post('/add', (req, res) => {
	console.log('adding two integers', req.body);
	res.json({ result: +req.body.a + +req.body.b });
});


const Ticket = mongoose.model('Ticket',
	new mongoose.Schema({
		// number: { type: String, required: true, unique: true, index: true },
		// category: String,
		// movie: String
		name: String
	}, {
			strict: false, // allow other field to be saved in MongoDB.
		}));

const User = mongoose.model('User',
	new mongoose.Schema({
		lastname: { type: String, required: true },
		firstname: { type: String, required: true },
	}, {
			strict: false, // allow other field to be saved in MongoDB.
		}));

async function connect() {
	try {
		await mongoose.connect(
			'mongodb://localhost/rest-db',
			{ useNewUrlParser: true, useCreateIndex: true });
		console.log('connected to MongoDB.');
	} catch (e) {
		console.log('error while connecting to MongoDB.', e.message);
		process.exit(1);
	}
}
connect();

const resources = [{ model: Ticket, rest: 'tickets' }, { model: User, rest: 'users' }];

resources.forEach(resource => {
	app.use(`/${resource.rest}`, rest.resource(resource.model));
});
