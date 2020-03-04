const express = require('express');
const router = express.Router();

const Categories = require('./model.js');

/**
 * @api {get} /api/categories/${id} Request All Categories from a User
 * @apiName GetCategories
 * @apiGroup Category
 * @apiParam {Number} id User id
 *
 * @apiSuccess {Number} id Folder id
 * @apiSuccess {String} name Folder name
 * @apiSuccess {Number} user_id Id of the user
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": 6,
 *   "name": "folder",
 *   "user_id": 2
 * },
 * {
 *   "id": 7,
 *   "name": "another folder",
 *   "user_id": 2
 * }
 */
//get folders/categories from a user
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Categories.findById(id)
		.then(categories => {
			console.log('yo', categories);
			res.json(categories);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

/**
 * @api {get} /api/categories/${id}/articles Request All Categories and Articles for a User
 * @apiName GetArticlesandCategories
 * @apiGroup Category and Articles
 * @apiParam {Number} id User id
 *
 * @apiSuccess {Number} category_id Category Id
 * @apiSuccess {String} title Article Title
 * @apiSuccess {String} url Link to Article
 * @apiSuccess {String} urlToImage Link to Image
 * @apiSuccess {Number} user_id User id
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 * {
 *   "category_id": 6,
 *   "title": "article name",
 *   "url": "www.google.com",
 *   "urlToImage": "https://source.unsplash.com/random/200x200",
 *   "user_id": 1
 *   "author": "name of author"
 * },
 * {
 *   "category_id": 6,
 *   "title": "article name",
 *   "url": "www.google.com",
 *   "urlToImage": "https://source.unsplash.com/random/200x200",
 *   "user_id": 1
 *   "author": "name of author"
 * }
 * ],
 */
//get folders/categories and articles from a user
router.get('/:id/articles', (req, res) => {
	const { id } = req.params;
	const cat = {
		art: []
	};
	console.log('id', id);
	Categories.findArticles(id)
		.then(articles => {
			console.log('yo', articles);
			cat.art = articles;
			res.json(cat);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

/**
 * @api {post} /api/categories/${id} Create Folder/Category
 * @apiName Create Categories
 * @apiGroup Category
 * @apiParam {Number} id User id
 * @apiParam {String} name Folder Name - req.body
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "Created": "New Folder"
 */
//create get folders/categories from a user
router.post('/:id', (req, res) => {
	const { id } = req.params;
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

/**
 * @api {put} /api/categories/${id} Update Folder/Category
 * @apiName Update Categories
 * @apiGroup Category
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} category_id Category/Folder id - sent in params as id
 * @apiParam {String} name Folder Name - sent in body
 *
 * @apiSuccess {String} name Folder Name
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 * {
 *  "Updated": 1
 */
//create get folders/categories from a user
//update folders/categories from a user
router.put('/:id', (req, res) => {
	const cat_id = req.params.id;
	const user_id = req.headers.user_id;
	const name = req.body.name;
	console.log('user_id', user_id);
	console.log('cat_id', cat_id);
	console.log('name', name);

	Categories.updateFolder(name, cat_id, user_id)
		.then(folder => {
			res.status(201).json({ Updated: folder });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new folder' });
		});
});

/**
 * @api {delete} /api/categories/${id} Delete Folder/Category
 * @apiName Delete Categories
 * @apiGroup Category
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} category_id Category/Folder id - sent in params as id
 *
 * @apiSuccess {String} name Folder Name
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 * {
 *  1
 * }
 */
//delete folders/categories from a user
router.delete('/:id', (req, res) => {
	const user_id = req.headers.user_id;
	const cat_id = req.params.id;
	console.log('user_id', user_id);
	console.log('cat_id', cat_id);
	Categories.del(cat_id)
		.then(folder => {
			console.log('folder', folder);
			res.status(201).json(folder);
		})
		.catch(({ name, code, message, stack }) => {
			res.status(500).json({ name, code, message, stack });
		});
});

/**
 * @api {post} /api/categories/${id}/favorite Favorite Folder/Category
 * @apiName Favorite Categories
 * @apiGroup Category
 *
 * @apiHeader {String} authorization token
 * @apiHeader {Number} user_id 1
 *
 * @apiParam {Number} category_id Category/Folder id - sent in params as id
 *
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 * {
 *  1
 * }
 */
//Favorite a folder
router.post('/:id/favorite', (req, res) => {
	const cat_id = req.params.id;

	Categories.addFav(cat_id)
		.then(response => {
			console.log(response);
			res.status(201).json(response);
		})
		.catch(({ name, code, message, stack }) => {
			res.status(500).json({ name, code, message, stack });
		});
});

module.exports = router;
