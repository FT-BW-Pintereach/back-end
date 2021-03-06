const db = require('./../data/connection.js');

module.exports = {
	all,
	add,
	remove,
	findById,
	findBy
};

function all() {
	return db('user');
}

function add(user) {
	return db('user')
		.insert(user, 'id')
		.then(ids => {
			const [id] = ids;
			return findById(id);
		});
}

function findById(id) {
	return db('user')
		.where({ id })
		.first();
}

function findBy(filter) {
	return db('user').where(filter);
}

function remove(id) {
	return db('user')
		.where({ id })
		.del();
}
