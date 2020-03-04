exports.up = function(knex) {
	return knex.schema.alterTable('category', tbl => {
		tbl.boolean('favorite').defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.table('category', tbl => {
		tbl.dropColumn('favorite');
	});
};
