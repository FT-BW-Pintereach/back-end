exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('articles')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('articles').insert([
				{
					id: 1,
					art_name: 'TK',
					link: 'https://learn.lambdaschool.com/course/cs-fsw',
					image: 'https://source.unsplash.com/random/200x200',
					category_id: '1',
					category_name: 'Lambda School',
					user_id: '1'
				},
				{
					id: 2,
					art_name: 'Dashboard',
					link: 'https://dashboards.lambdaschool.com',
					image: 'https://source.unsplash.com/random/200x200',
					category_id: '1',
					category_name: 'Lambda School',
					user_id: '1'
				},
				{
					id: 3,
					art_name: 'Slack',
					link: 'https://slack.com',
					image: 'https://source.unsplash.com/random/200x200',
					category_id: '1',
					category_name: 'Lambda School',
					user_id: '1'
				}
			]);
		});
};
