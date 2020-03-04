const request = require('supertest');
const server = require('../api/server.js');
const Auth = require('./../auth/helpers.js');

describe('GET /:id', () => {
	it('sanity test', () => {
		expect(true).toBe(true);
	});

	it('returns 200 OK', () => {
		return request(server)
			.get('/api/categories/:id')
			.then(res => {
				console.log('CODE', res.status);
				expect(res.status).toBe(200);
			});
	});

	it('end to end', async () => {
		//Register User
		const res = await request(server)
			.post('/api/auth/register')
			.send({
				username: 'testing',
				password: 'pass'
			});

		const new_user = await Auth.findBy({ username: 'testing' });

		/* 	const res = await request(server).get('/api/categories/:id');
		console.log('response', res);
		console.log('body', res.body);
		expect(Array.isArray(res.body)).toBe(true); */
	});
});
