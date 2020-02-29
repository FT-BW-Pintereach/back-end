const express = require('express');
const router = express.Router();

const Categories = require('./model.js');

//get folderrs/categories from a user
router.get('/:id', (req, res) => {
	Categories.getCategories()
		.then(categories => {
			res.json(categories);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

/api/aceegiorst /
	1 /
	//create resource
	router.post('/:id/resources', (req, res) => {
		const resource = req.body;

		Categories.addResource(resource)
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
