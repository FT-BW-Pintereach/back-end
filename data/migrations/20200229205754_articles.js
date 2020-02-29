exports.up = function(knex) {
	return knex.schema.createTable('articles', tbl => {
		tbl.increments();
		tbl.text('art_name').notNullable();
		tbl.text('link');
		tbl.text('image');
		tbl
			.integer('category_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('categories')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		tbl
			.text('category_name')
			.notNullable()
			.unsigned()
			.references('cat_name')
			.inTable('categories')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		tbl
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('auth')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('articles');
};
