import { getNotes } from "./fetch.js";

function displayNotes(notes) {
    

    for (let i = 0; i < notes.length ; i++) {

        document.querySelector('body').innerHTML += `<li>${notes[i].titre} - ${notes[i].contenu}</li>`
    }
}

function log(notes) {
    

    console.log(log);
}








getNotes(displayNotes)
getNotes(log)