const notes = require('./db');

module.exports = (noteObj, cb) => {
  notes.insert(noteObj, (error, noteCreatedObj) => {
    if (error) return cb({ error });
    return cb({ data: noteCreatedObj });
  });
}