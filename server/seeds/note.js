
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function () {
      // Inserts seed entries
      return knex('note').insert([
        {id: 1, title: 'rowValue1'},
        {id: 2, title: 'rowValue2'},
        {id: 3, title: 'rowValue3'}
      ]);
    });
};
