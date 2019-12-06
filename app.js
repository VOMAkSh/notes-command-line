const program = require('commander');
const prompts = require('prompts');
const getAllNotes = require('./db/findAllNotes');
const addNote = require('./db/addNote');

program
  .command('get_notes [input]')
  .description("Get All Saved Notes")
  .action((input) => {
    if (input) console.log("1 notes")
    else getAllNotes(resultObj => {
      if (resultObj.error) return console.log("Some error occurred");
      console.table(resultObj.data);
    });
  });

program
  .command('add_note')
  .description("Add new note")
  .action(async () => {
    const note = {};
    const noteTitle = await prompts({
      type: 'text',
      name: 'note_title',
      message: 'Enter title of note'
    });
    note.noteTitle = noteTitle.note_title;
    const noteDescription = await prompts({
      type: 'text',
      name: 'note_description',
      message: 'Enter description of note',
    });
    note.noteDescription = noteDescription.note_description;
    addNote(note, resultObj => {
      if (resultObj.error) return console.log("Some error occurred");
      console.log("New note has been added successfully");
    })
  });

program.parse(process.argv);  