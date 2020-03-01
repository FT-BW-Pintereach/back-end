exports.up = function(knex) {
	return knex.schema.createTable('categories', tbl => {
		tbl.increments();

		tbl
			.text('cat_name')
			.notNullable()
			.unique();

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
	return knex.schema.dropTableIfExists('categories');
};
