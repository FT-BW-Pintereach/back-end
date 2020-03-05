const express = require('express');
const router = express.Router();

const Articles = require('./model.js');

/**
 * @api {get} /api/articles/${id} Displays all articles from a category
 * @apiName Get Articles
 * @apiGroup Articles
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} category_id Category/Folder id - sent in params as id
 *
 * @apiSuccess {Number} id Article Id
 * @apiSuccess {Number} user_id User ID
 * @apiSuccess {String} title Title of Article
 * @apiSuccess {String} description Description of Article
 * @apiSuccess {String} url Article url
 * @apiSuccess {String} urlToImage Image url
 * @apiSuccess {String} author Author
 * @apiSuccess {Number} category_id Category/Folder Id
 * @apiSuccess {String} name Category/Folder Name
 *
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 * {
 *  "id": 6,
 *  "user_id": 2,
 *  "title": "some title",
 *  "description": "blabla",
 *  "url": "www.google.com",
 *  "urlToImage": "https://source.unsplash.com/random/200x200",
 *  "author": "Person",
 *  "category_id": 1,
 *  "name": "Lambda School"
 * },
 * {
 *  "id": 7,
 *  "user_id": 2,
 *  "title": "aarttt",
 *  "description": "blabla",
 *  "url": "https://learn.lambdaschool.com/",
 *  "urlToImage": "https://source.unsplash.com/random/200x200",
 *  "author": "Person",
 *  "category_id": 1,
 *  "name": "Lambda School"
 * }
 */
//get articles from a category
router.get('/:id', (req, res) => {
	const user_id = req.headers.user_id;
	const cat_id = req.params.id;

	Articles.getArticlesById(cat_id, user_id)
		.then(resources => {
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

/**
 * @api {delete} /api/articles/${id} Deletes a article
 * @apiName Deletes Articles
 * @apiGroup Articles
 *
 * @apiHeader {String} authorization token
 *
 * @apiParam {Number} article_id Article id - sent in params as id
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 *
 * 1
 *
 */
router.delete('/:id', (req, res) => {
	const art_id = req.params.id;

	Articles.deleteArticlesById(art_id)
		.then(deleted => {
			res.json(deleted);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete article' });
		});
});

/**
 * @api {post} /api/articles/${id} Save/Post Article to a Folder
 * @apiName Save Article
 * @apiGroup Articles
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} category_id Category/Folder id - sent in params as id
 * @apiParam {String} title Title of Article
 * @apiParam {String} description Article's Description
 * @apiParam {url} url Article's Url
 * @apiParam {urlToImage} Image Url
 * @apiParam {author} Author of the Article
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 *
 * 1
 */
//create article to folder
router.post('/:id/', (req, res) => {
	const user_id = req.headers.user_id;
	const cat_id = req.params.id;
	const article = req.body;

	Articles.addArticle(article, cat_id, user_id)
		.then(article => {
			res.status(201).json(article.rowCount);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new artcle' });
		});
});

/**
 * @api {put} /api/articles/${id} Update Article
 * @apiName Update Articles
 * @apiGroup Articles
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} article_id Category/Folder id - sent in params as id
 * @apiParam {String} title Title of Article
 * @apiParam {String} description Article's Description
 * @apiParam {String} url Article's Url
 * @apiParam {String} urlToImage urlToImage
 * @apiParam {author} Author of the Article
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 *
 * 1
 */
//update article
router.put('/:id/', (req, res) => {
	const user_id = req.headers.user_id;
	const art_id = req.params.id;
	const article = req.body;

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
