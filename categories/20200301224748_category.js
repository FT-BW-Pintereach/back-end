exports.up = function(knex) {
	return knex.schema.createTable('category', tbl => {
		tbl.increments();

		tbl.string('name').notNullable();

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
	return knex.schema.dropTableIfExists('category');
};
