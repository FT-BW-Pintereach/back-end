const db = require('./../data/connection.js');

//retrieving a list of categories
function getCategories() {
	return db('category');
}

/* function addFolder(name, user_id) {
	const newCategory = {
		name: name,
		user_id: user_id,
		favorite: false
	};
	return db('category')
		.insert(newCategory)
		.then(ids => {
			console.log('folder', ids);

			return getById(ids);
		});
} */

async function addFolder(newFolder) {
	console.log('newFolder', newFolder);
	return db('category').insert(newFolder);
}

function findById(id) {
	console.log('workingg', id);
	return db('category');
}

function getById(id) {
	console.log('id', id);
	return db('category')
		.select('id')
		.where({ id });
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

function delAll() {
	return db('category').del();
}

function findBy(filter) {
	return db('category').where(filter);
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
	addFav,
	delAll,
	findBy,
	getById
};
