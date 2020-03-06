exports.up = function(knex) {
	return knex.schema.createTable('article', tbl => {
		tbl.increments();

		tbl
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('user')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		tbl.string('title');

		tbl.text('description');

		tbl.string('url').notNullable();

		tbl.string('urlToImage').notNullable();

		tbl.string('author').notNullable();

		tbl
			.integer('category_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('category')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('article');
};
