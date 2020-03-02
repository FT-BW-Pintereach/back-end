const db = require('./../data/connection.js');

//retrieving a list of categories
function getCategories() {
	return db('category');
}

function addFolder(name, user_id) {
	console.log('here', user_id);
	const newCategory = {
		name: name,
		user_id: user_id
	};
	console.log('newCategory', newCategory);

	return db('category').insert(newCategory);
}

/* 
function addResourceToIndex(index) {
	return db('resourcesofproject')
		.insert(index)
		.then(ids => ({ id: ids[0] }));
}
 */

function del(id) {
	return db('projects')
		.where({ id })
		.first();
}

function findById(id) {
	const user_id = id;
	console.log('id', id);
	return db('category').where({ user_id });
}

//retrieving a list of tasks, should include the project name and project description.

//adding resources

//adding projects

module.exports = {
	getCategories,
	addFolder,
	findById,
	del
};
