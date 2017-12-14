// note title type text
// priority - type integer 1, 2
// descritption - text
// done - boolean
// date - datetime 

exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', (table) => {
      table.increments();
      table.text('title').notNullable();
      table.integer('priority').notNullable();
      table.text('description');
      table.boolean('done').defaultTo(false).notNullable();
      table.datetime('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note');
};
