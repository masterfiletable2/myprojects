const notesList = document.querySelector('.notes__list');
const noteForm = document.querySelector('.notes__form');
const noteInput = noteForm.querySelector('.notes__title');
const noteContent = noteForm.querySelector('.note__content');
const deleteAll = document.querySelector('.notes__button--deleteAll');

const notes = JSON.parse(localStorage.getItem('notes')) || [];
const actuallyTime = new Date().toJSON().slice(0,20).replace(/-/g,'/');

const color = document.querySelector(".notes__color");



let storyOfPosition = 0;



fillNotesList(notes);

//funkcja tworzaca obiekt z danymi 
function createNote(e) {
  e.preventDefault();
  
 
  const title = noteInput.value;
  const content = noteContent.value;
  let storyOfPosition = null

//obiekt który będzie przechowany w localStoarge 
  let note = {
    title: title,
    content: content,
    date: actuallyTime.replace("T" , " "),
    color: color.value,
    storyOfPosition: storyOfPosition
  };

//  JSON.stringify(note.storyOfPosition = "2")

  
  notes.push(note);
  fillNotesList(notes);
  storeNotes(notes);
  noteForm.reset();


}


//funkcja zwracająca dane z notatki
function fillNotesList(notes = []) {
  const notesHtml = notes.map((note, i) => {
    return `
    <div class="notes__dragContainer" draggable="true" id="${i}">
      <div class="notes__element"  style="border-color:${note.color}" data-id="${i}">
      <div class="date">${note.date}</div>
        <div class="title">${note.title}</div>
        <div class="content">${note.content}</div>
           <i class="delete">x</i>
      </div>
      </div>
    `;
  }).join('');
  
  notesList.innerHTML = notesHtml;



  let test = document.querySelector("#delete");
  

  /*odkrywanie i chowanie przycisku, jezeli jest rekord, badz go nie ma w localStoarge */
  if(notes.length === 0){
   deleteAll.style.display = "none";
  }
  else {
    deleteAll.style.display = "inline-flex";
    notesList.style.display ="flex"

  }
}



