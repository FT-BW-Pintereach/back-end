const express = require('express');
const router = express.Router();

const Categories = require('./model.js');

/**
 * @api {get} /api/categories/${id} Request All Categories for a User
 * @apiName GetCategories
 * @apiGroup Category
 */
//get folders/categories from a user
router.get('/:id', (req, res) => {
	const id = req.headers.user_id;

	Categories.findById(id)
		.then(categories => {
			console.log('yo');
			res.json(categories);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

//create get folders/categories from a user
router.post('/:id', (req, res) => {
	const id = req.headers.user_id;
	console.log('ui', req.headers.user_id);
	const name = req.body.name;
	console.log(id);
	console.log(name);

	Categories.addFolder(name, id)
		.then(folder => {
			res.status(201).json({ Created: 'New Folder' });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new folder' });
		});
});

//delete folders/categories from a user
router.delete('/:id', (req, res) => {
	const id = req.headers.user_id;

	Categories.del(id)
		.then(folder => {
			res.status(201).json({ Created: 'New Folder' });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new folder' });
		});
});

//filter resources to see if it exists
//addd resource to index if it already exists

module.exports = router;
