exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('category')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('category').insert([
				{ id: 1, name: 'Lambda School', user_id: '1' }
				/* { id: 2, cat_name: 'React', user_id: '1' },
				{ id: 3, cat_name: 'JS', user_id: '1' },
				{ id: 4, cat_name: 'Redux', user_id: '2' },
				{ id: 5, cat_name: 'Cooking', user_id: '2' },
				{ id: 6, cat_name: 'Lambda Schoool', user_id: '2' } */
			]);
		});
};
