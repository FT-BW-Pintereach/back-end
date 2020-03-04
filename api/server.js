const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/router');
const articlesRouter = require('../articles/router');
const categoriesRouter = require('../categories/router');
const restricted = require('../middleware/restricted.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/categories', restricted, categoriesRouter);
server.use('/api/articles', restricted, articlesRouter);

server.use('/docs', express.static('./docs'));

server.get('/', (req, res) => {
	res.send({ API: 'UP' });
});

server.use((err, req, res, next) => {
	console.log(err.message);
	res.status(500).json({
		message: 'Something went wrong!',
		error: err.message
	});
});

module.exports = server;
