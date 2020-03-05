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
				},
				{
					id: 2,
					user_id: '1',
					title: 'art2',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				},
				{
					id: 3,
					user_id: '1',
					title: 'aer3',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				},
				{
					id: 4,
					user_id: '1',
					title: 'art4',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				},
				{
					id: 5,
					user_id: '1',
					title: 'art5',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				},
				{
					id: 6,
					user_id: '2',
					title: 'aarttt',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '1'
				},
				{
					id: 7,
					user_id: '2',
					title: 'atata',
					description: 'blabla',
					url: 'https://learn.lambdaschool.com/course/cs-fsw',
					urlToImage: 'https://source.unsplash.com/random/200x200',
					author: 'Person',
					category_id: '2'
				}
			]);
		});
};
