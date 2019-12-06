const notes = require('./db');

module.exports = cb => {
  notes.remove({}, (error) => {
    if (error) return cb({ error });
    else return cb({ data: "All notes are removed successfully" });
  })
}