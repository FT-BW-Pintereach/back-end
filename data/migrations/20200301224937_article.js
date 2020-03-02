exports.up = function(knex) {
	return knex.schema.createTable('article', tbl => {
		tbl.increments();

		tbl.string('title');

		tbl.string('link').notNullable();
		tbl.string('image').notNullable();
		tbl
			.integer('category_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('category')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		tbl
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('user')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('article');
};
