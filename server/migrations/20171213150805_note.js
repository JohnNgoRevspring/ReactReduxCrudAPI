
exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', (table) => {
      table.increments();
      table.text('title').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note');
};