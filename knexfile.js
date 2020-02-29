// Update with your config settings.
require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'postgres',
			password: process.env.DB_URL,
			database: 'pintereach'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	testing: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'postgres',
			password: process.env.DB_URL,
			database: 'testing'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations'
		}
	},

	//from heroku
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations'
		}
	}
};
