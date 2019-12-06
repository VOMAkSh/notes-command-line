const Datastore = require('nedb');

module.exports = new Datastore({
  filename: 'notes.db',
  autoload: true
});