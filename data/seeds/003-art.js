exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('article')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('article').insert([
				{
					id: 1,
					title: 'Training Kit',
					link: 'https://learn.lambdaschool.com/course/cs-fsw',
					image: 'https://source.unsplash.com/random/200x200',
					category_id: '1',
					user_id: '1'
				}
			]);
		});
};
