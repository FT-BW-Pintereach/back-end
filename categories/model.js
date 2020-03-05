const db = require('./../data/connection.js');

//retrieving a list of categories
function getCategories() {
	return db('category');
}

function addFolder(name, user_id) {
	const newCategory = {
		name: name,
		user_id: user_id
	};
	return db('category').insert(newCategory);
}

function updateFolder(changes, cat_id, user_id) {
	const updatedCategory = {
		name: changes.name,
		user_id: user_id
	};
	console.log('here', updatedCategory);
	if (updatedCategory.name !== undefined) {
		return db('category')
			.where('id', cat_id)
			.update(updatedCategory);
	} else {
		return '0';
	}
}

function del(id) {
	return db('category')
		.where({ id })
		.del();
}

function findById(id) {
	const user_id = id;
	return db('category').where({ user_id });
}

//retrieving a list of tasks, should include the project name and project description.
function findArticles(user_id) {
	return db('article')
		.select(
			'category_id',
			'title',
			'url',
			'urlToImage',
			'user_id',
			'author'
			/* 'category.user_id as ui',
			'category.name as categoryname' */
		)
		/* 		.innerJoin('category', 'category_id', 'category.id')
		 */ .where({ user_id });
}

function addFav(cat_id) {
	return db('category')
		.update({ favorite: true })
		.where('id', cat_id);
}

module.exports = {
	getCategories,
	addFolder,
	findById,
	del,
	findArticles,
	updateFolder,
	addFav
};
