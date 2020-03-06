const request = require('supertest');
const server = require('../api/server.js');
const Auth = require('./../auth/helpers.js');
require('dotenv').config();

let username = `someuser${Math.random()}`;
let ui = 1;

console.log('someuser', username);

describe('Categories Router', () => {
	it('sanity test', () => {
		expect(true).toBe(true);
	});

	it('registers', async () => {
		//Register User
		const register = await request(server)
			.post('/api/auth/register')
			.send({
				username: username,
				password: 'pass'
			});
		let ui = register.body.id;
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

	it('gets folders from user', async () => {
		const res = await request(server)
			.get(`/api/categories/${ui}`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.then(response => {
				expect(Array.isArray(response.body)).toBe(true);
			});
	});

	it('gets folders with articles nested', async () => {
		const res = await request(server)
			.get(`/api/categories/${ui}/articles`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.then(response => {
				expect(Array.isArray(response.body.art)).toBe(true);
				expect(response.status).toBe(200);
			});
	});

	it('creates folder', async () => {
		const res = await request(server)
			.post(`/api/categories/${ui}`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.send({ name: 'new folder' })
			.then(response => {
				expect(response.body.Created).toBe('New Folder');
			});
	});

	it('updated folder with id 2', async () => {
		const id = process.env.UI;
		const res = await request(server)
			.put(`/api/categories/2`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.send({ name: 'updated folder' })
			.then(response => {
				expect(response.body.Updated).toBe(1);
			});
	});
});

describe('Articles Router', () => {
	it('sanity test', () => {
		expect(true).toBe(true);
	});

	it('gets articles from category 2', async () => {
		const res = await request(server)
			.get(`/api/articles/2`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.then(response => {
				expect(Array.isArray(response.body)).toBe(true);
			});
	});

	it('creates article for folder 2', async () => {
		const res = await request(server)
			.post(`/api/articles/2`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.send({
				title: 'TITLE',
				description: 'linkk',
				url: 'dsdsd',
				urlToImage: 'dskjd',
				author: 'dsadas'
			})
			.then(response => {
				console.log(response.body);
				expect(response.body).toBe(1);
			});
	});

	it('updates article for folder 2', async () => {
		const res = await request(server)
			.post(`/api/articles/2`)
			.set('Authorization', process.env.TOKEN)
			.set('user_id', ui)
			.send({
				title: 'UPDATED',
				description: 'linkk',
				url: 'dsdsd',
				urlToImage: 'dskjd',
				author: 'dsadas'
			})
			.then(response => {
				console.log(response.body);
				expect(response.body).toBe(1);
			});
	});
});
