const notes = require('./db');

module.exports = (noteId, cb) => {
  notes.remove({ _id: noteId }, error => {
    if (error) return cb({ error });
    else return cb({ data: "Required note has been deleted successfully" });
  })
}