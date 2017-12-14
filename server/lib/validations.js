function validNote(note) {
  return typeof note.title == 'string' &&
          note.title.trim() != '';
}

function validId(id) {
  return !isNaN(id);
}

module.exports = {
  validNote,
  validId
};