const express = require('express');
const router = express.Router();

const Articles = require('./model.js');

//get projects
router.get('/', (req, res) => {
	Articles.getArticles()
		.then(resources => {
			console.log('working');
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

//create resource
router.post('/:id/resources', (req, res) => {
	const resource = req.body;

	Articles.addResource(resource)
		.then(resource => {
			console.log(resource);
			Resources.addResourceToIndex({
				project_id: req.params.id,
				resource_id: resource.id
			});
			res.status(201).json(resource);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});

//filter resources to see if it exists
//addd resource to index if it already exists

module.exports = router;
