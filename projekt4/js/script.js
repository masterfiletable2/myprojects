const notesList = document.querySelector('.notes__list');
const noteForm = document.querySelector('.notes__form');
const noteInput = noteForm.querySelector('.notes__title');
const noteContent = noteForm.querySelector('.note__content');
const deleteAll = document.querySelector('.notes__button--deleteAll');

const notes = JSON.parse(localStorage.getItem('notes')) || [];
const actuallyTime = new Date().toJSON().slice(0,20).replace(/-/g,'/'); //czas notatki przetworzony na bardziej czytelny z uzyciem ciec i zamian pewnych wartosci

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
    date: actuallyTime.replace("T" , " "), // kontynuacja zabawy z wyswietleniem
    color: color.value, // wartosc koloru
    storyOfPosition: storyOfPosition 
  };

//  JSON.stringify(note.storyOfPosition = "2")

  //dodawanie notatki na koniec tablicy notes
  notes.push(note);
  fillNotesList(notes);
  storeNotes(notes);


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
  }); 
  
  notesList.innerHTML = notesHtml;

  

  /*odkrywanie i chowanie przycisku, jezeli jest rekord, badz go nie ma w localStoarge */
  if(notes.length === 0){
   deleteAll.style.display = "none";
  }
  else {
    deleteAll.style.display = "inline-flex";
    notesList.style.display ="flex"

  }
}

function storeNotes(notes = []) {

  //dodwanie nazwy klucza localStorage
  localStorage.setItem('notes', JSON.stringify(notes));
}
function deleteNote(e) {
  if (!e.target.matches('.delete')) return;
  
  // znajdź index
  const index = e.target.parentNode.dataset.id;

  notes.splice(index, 1); // 1 aby  1 
  //wypełnianie notatki
  fillNotesList(notes);
  //zapisanie do local Stoarge
  storeNotes(notes);
}


//Sztuczne usuwanie z localstoarge - wyzerowanie tablicy notatek
deleteAll.addEventListener('click',  ()=> 
{
  localStorage.clear()
  notesList.style.display ="none";
  notes.length = 0;

  //jezeli juz wyzerowano, to ukryj przycisk do usuwania
  if(notes.length === 0){
    deleteAll.style.display = "none";
   }


}
  );


    Array.from(document.querySelectorAll(".notes__element")).forEach(link => {
      link.addEventListener('click', function(event) {
        if(event){
        this.style.order="-1";
        this.style.order--
      }
      
      });
  });

noteForm.addEventListener('submit', createNote);
notesList.addEventListener('click', deleteNote);


