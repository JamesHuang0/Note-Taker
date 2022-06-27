const fs = require("fs");
const path = require("path");

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote(notesArray, id) {
    let deleteNoteID = parseInt(id);
    notesArray.splice(deleteNoteID, 1);

    for (let i = deleteNoteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
}


module.exports = {
    addNote,
    deleteNote
};