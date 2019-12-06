const notes = require('./db');

module.exports = (noteId, cb) => {
  notes.find({ _id: noteId }, (error, noteObj) => {
    if (error) return cb({ error });
    else return cb({ data: noteObj });
  });
}