exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('categories')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('categories').insert([
				{ id: 1, cat_name: 'Lambda School', user_id: '1' },
				{ id: 2, cat_name: 'React', user_id: '1' },
				{ id: 3, cat_name: 'JS', user_id: '1' }
			]);
		});
};
