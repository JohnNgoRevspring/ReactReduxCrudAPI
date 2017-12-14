const knex = require('./knex');

module.exports = {
    getAll: () => {
        return knex('note').select();
    },
    getOne: (id) => {
        return knex('note')
                .select()
                .where('id', id)
                .first();
    },
    create: (note) => {
        return knex('note')
                    .insert(note, 'id');
    },
    update: (id, note) => {
        return knex('note')
                    .where('id', id)
                    .update(note, 'id');
    },
    delete: (id) => {
        return knex('note')
                    .where('id', id)
                    .del();
    }
}