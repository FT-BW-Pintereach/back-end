const db = require('./../data/connection.js');

//retrieving a list of categories
function getCategories() {
	return db('categories');
}

/* function addResource(resource) {
	return db('resources')
		.insert(resource, 'resource')
		.then(ids => ({ id: ids[0] }));
}

function addResourceToIndex(index) {
	return db('resourcesofproject')
		.insert(index)
		.then(ids => ({ id: ids[0] }));
}

function findByIdR(id) {
	return db('resources')
		.where({ id })
		.first();
}
 */
//retrieving a list of tasks, should include the project name and project description.

//adding resources

//adding projects

module.exports = {
	getCategories
};
