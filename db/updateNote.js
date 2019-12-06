const notes = require('./db');

module.exports = (noteId, noteObj, cb) => {
  notes.update({ _id: noteId }, { noteObj }, (error) => {
    if (error) return cb({ error });
    else return cb({ data: "Note Updated Successfully" });
  })
}