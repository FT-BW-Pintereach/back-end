const express = require('express');
const router = express.Router();

const Articles = require('./model.js');

//get projects
router.get('/:id', (req, res) => {
	const user_id = req.headers.user_id;
	const cat_id = req.params.id;
	console.log('cat_id', cat_id);
	console.log('user_id', user_id);

	Articles.getArticlesById(cat_id, user_id)
		.then(resources => {
			console.log('working');
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

router.delete('/:id', (req, res) => {
	const user_id = req.headers.user_id;
	const art_id = req.params.id;
	console.log('art_id', art_id);
	console.log('user_id', user_id);

	Articles.deleteArticlesById(art_id)
		.then(resources => {
			console.log('working');
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

//create article to folder
router.post('/:id/', (req, res) => {
	const user_id = req.headers.user_id;
	const cat_id = req.params.id;
	const article = req.body;
	console.log('article', article);

	Articles.addArticle(article, cat_id, user_id)
		.then(article => {
			console.log('article', article);
			res.status(201).json(article);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new artcle' });
		});
});

//update article
router.put('/:id/', (req, res) => {
	const user_id = req.headers.user_id;
	const art_id = req.params.id;
	const article = req.body;
	console.log('article', article);

	Articles.updateArticle(article, art_id, user_id)
		.then(updated => {
			console.log('article', updated);
			res.status(201).json(updated);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new artcle' });
		});
});

//filter resources to see if it exists
//addd resource to index if it already exists

module.exports = router;
