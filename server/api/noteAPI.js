const express = require('express');
const router = express.Router();

const queries = require('../db/queries');
const validNote = require('../lib/validations').validNote;
const validId = require('../lib/validations').validId;

router.get('/', (req, res) => {
  queries.getAll().then(notes => {
		  res.json(notes);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if(validId(id)) {
    queries.getOne(id).then(note => {
      res.json(note);
    });
  } else {
    res.status(404);
    res.json({
      message: 'Not Found'
    });
  }
});

router.post('/', (req, res) => {
    console.log(req.body);
  if(validNote(req.body)) {
    // insert into the DB
    const note = {
      title: req.body.title
    };

    queries
      .create(note)
      .then(ids => {
        res.json({
          id: ids[0]
        });
      });
  } else {
    // respond with an error
    res.status(500);
    res.json({
      message: 'Invalid note'
    });
  }
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  if(validId(id)) {
    const note = {
      title: req.body.title
    };

    queries
      .update(id, note)
      .then(() => {
        res.json({
          message: '😊'
        });
      });
  } else {
    res.status(500);
    res.json({
      message: 'Invalid id'
    })
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  if(validId(id)) {
    queries
      .delete(id)
      .then(() => {
        res.json({
          message: '🗑'
        });
      });
  } else {
    res.status(500);
    res.json({
      message: 'Invalid id'
    })
  }
});


module.exports = router;