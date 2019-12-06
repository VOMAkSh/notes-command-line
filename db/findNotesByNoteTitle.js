const notes = require('./db');

module.exports = (noteTitleInput, cb) => {
  notes.find({ noteTitle: { $regex: `/${noteTitleInput}/` } }, (error, notes) => {
    if (error) return cb({ error });
    else return cb({ data: notes });
  })
}