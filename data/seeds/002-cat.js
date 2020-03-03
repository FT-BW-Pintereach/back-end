exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('category')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('category').insert([
				{ id: 1, name: 'Lambda School', user_id: '1' },
				{ id: 2, name: 'Cooking', user_id: '1' },
				{ id: 3, name: 'Run', user_id: '1' },
				{ id: 4, name: 'Work', user_id: '1' },
				{ id: 5, name: 'JS', user_id: '1' },
				{ id: 6, name: 'folderr', user_id: '2' },
				{ id: 7, name: 'folder from 2', user_id: '2' },
				{ id: 8, name: 'folder from user2', user_id: '2' }
			]);
		});
};
