const notes = require('./db');

module.exports = cb => {
  notes.find({}, (error, data) => {
    if (error) return cb({ error });
    else return cb({ data });
  })
}