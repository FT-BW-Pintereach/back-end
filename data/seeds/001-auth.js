exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('auth')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('auth').insert([
				{ id: 1, username: 'ana', password: 'pass' },
				{ id: 2, username: 'leo', password: 'pass' },
				{ id: 3, username: 'vanesa', password: 'pass' }
			]);
		});
};
