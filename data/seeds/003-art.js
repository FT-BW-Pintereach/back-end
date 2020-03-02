exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('article')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('article').insert([
				{
					id: 1,
					user_id: '1',
					title: 'Training Kit',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				}
			]);
		});
};
