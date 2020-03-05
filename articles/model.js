const db = require('./../data/connection.js');

function getArticlesById(cat_id, user_id) {
	return db('article')
		.join('category', 'category.id', 'article.category_id')
		.join('user', 'user.id', 'article.user_id')
		.select(
			'article.id',
			'article.user_id',
			'article.title',
			'article.description',
			'article.url',
			'article.urlToImage',
			'article.author',
			'article.category_id',
			'category.name'
		)
		.where('category.id', cat_id)
		.where('user.id', user_id);
}

function deleteArticlesById(art_id) {
	return db('article')
		.where('id', art_id)
		.del();
}

function addArticle(article, cat_id, user_id) {
	const newArticle = {
		user_id: user_id,
		title: article.title,
		description: article.description,
		url: article.url,
		urlToImage: article.urlToImage,
		author: article.author,
		category_id: cat_id
	};
	return db('article')
		.insert(newArticle)
		.where('article.category_id', cat_id)
		.where('article.user_id', user_id);
}

function updateArticle(article, art_id, user_id) {
	const updated = {
		user_id: user_id,
		title: article.title,
		description: article.description,
		url: article.url,
		urlToImage: article.urlToImage,
		author: article.author
	};
	return db('article')
		.update(updated)
		.where('article.id', art_id);
}

module.exports = {
	addArticle,
	getArticlesById,
	deleteArticlesById,
	updateArticle
};
