const db = require('./../data/connection.js');

module.exports = {
	all,
	add,
	remove,
	findById,
	findBy
};

function all() {
	return db('auth');
}

function add(user) {
	return db('auth')
		.insert(user, 'id')
		.then(ids => {
			const [id] = ids;
			return findById(id);
		});
}

function findById(id) {
	return db('auth')
		.where({ id })
		.first();
}

function findBy(filter) {
	console.log('filter', filter);
	return db('auth').where(filter);
}

function remove(id) {
	return db('users')
		.where({ id })
		.del();
}
