const knex = require('./knex');

module.exports = {
    getAll: () => {
        return knex('note').select();
    },
    getPage:(limit,start,order) => {  //GET /notes?limit=10&start=1&order=asc
        return knex.select('*').from('note')
                    //.where('title', 'ilike', '%'+query+'%')
                    .limit(limit)
                    .offset(start)
                    .orderBy('created_at', order);
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