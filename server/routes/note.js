const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* this router is mounted at http://localhost:3000/notes */
router.get('/', (req, res) => {
  knex('note')
    .select()
    .then(notes => {
      res.render('all', { notes: notes });
    });
});

router.get('/new', (req, res) => {
  res.render('new');
});

function responseAndRenderNote(id, res, viewName) {
  if (typeof id != 'undefined') {
    knex('note')
      .select()
      .where('id', id)
      .first()
      .then(note => {
        res.render(viewName, note);
      });
  } else {
    // response with an error
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
}

router.get('/:id', (req, res) => {
  const id = req.params.id;
  responseAndRenderNote(id,res,'single')
});

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  responseAndRenderNote(id, res, 'edit');
});

function validNote(note) {
  return typeof note.title == 'string' &&
          note.title.trim() != '' &&
          typeof note.priority != 'undefined' &&
          !isNaN(Number(note.priority));
}

function noteInsertUpdate(req, res, callback) {
    const note = {
      title : req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date: new Date()
    };
    if (req.body.id != undefined) note.id = req.body.id;
    console.log(note);
    callback(note);
}

router.post('/', (req, res) => {
if (validNote(req.body)) {
  noteInsertUpdate(req, res, (note) => {
    knex('note')
      .insert(note, 'id')
      .then( ids => {
        const id = ids[0];
        res.redirect(`/note`);
      })
    });
  } else {
    // response with an error
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
});

router.put("/:id", (req,res) => {
  if (validNote(req.body)) {
      noteInsertUpdate(req, res, (note) => {
        note.date = new Date();
        knex('note')
          .where('id',req.params.id)
          .update(note,'id')
          .then(() => {
            //res.redirect(`/notes/${req.params.id}/edit`);
            res.redirect(`/note`);
          });
      });
    } else {
      res.status(500);
      res.render('error', {
        message: 'Invalid id'
      });
    }
});

router.delete("/:id", (req,res) => {
  const id = req.params.id;
  if (typeof id != 'undefined') {
    noteInsertUpdate(req, res, (note) => {
      knex('note')
        .where('id', id)
        .del()
        .then( () => {
          res.redirect('/note');
        })
    });
  } else {
    // response with an error
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
});
module.exports = router;
