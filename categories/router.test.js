const request = require('supertest');
const server = require('../api/server.js');
const Auth = require('./../auth/helpers.js');
require('dotenv').config();

let username = `someuser${Math.random()}`;
let ui;

console.log('someuser', username);

describe('GET /:id', () => {
	it('sanity test', () => {
		expect(true).toBe(true);
	});

	/* 	it('returns 200 OK', () => {
		return request(server)
			.get('/api/categories/:id')
			.then(res => {
				console.log('CODE', res.status);
				expect(res.status).toBe(200);
			});
	}); */

	it('registers', async () => {
		//Register User
		const register = await request(server)
			.post('/api/auth/register')
			.send({
				username: username,
				password: 'pass'
			});
		process.env.UI = register.body.id;
		const new_user = await Auth.findBy({ username: 'testing' });
	});
	//Login User

	it('logs in', async function logginin() {
		const login = await request(server)
			.post('/api/auth/login')
			.send({
				username: username,
				password: 'pass'
			})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200);
		process.env.TOKEN = login.body.token;
	});

	it('gets folders from users', async () => {
		const id = process.env.UI;
		const res = await request(server)
			.get(`/api/categories/${id}`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', process.env.UI)
			.then(response => {
				expect(Array.isArray(response.body)).toBe(true);
			});
	});

	it('gets folders with articles nested', async () => {
		const id = process.env.UI;
		const res = await request(server)
			.get(`/api/categories/${id}/articles`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', process.env.UI)
			.then(response => {
				expect(Array.isArray(response.body.art)).toBe(true);
				expect(response.status).toBe(200);
			});
	});

	it('creates folder', async () => {
		const id = process.env.UI;
		const res = await request(server)
			.post(`/api/categories/${id}`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', process.env.UI)
			.send({ name: 'new folder' })
			.then(response => {
				expect(response.body.Created).toBe('New Folder');
			});
	});

	it('updated folder with id 1', async () => {
		const id = process.env.UI;
		const res = await request(server)
			.put(`/api/categories/${id}`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', process.env.UI)
			.send({ name: 'updated folder' })
			.then(response => {
				console.log('RES', response.body);
				console.log('process.env.UI', process.env.UI);
				console.log('Authorization', process.env.TOKEN);
				console.log('aaaaa', response.body);
				expect(response.body.Created).toBe('Updated Folder');
			});
	});
});
