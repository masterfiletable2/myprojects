const notesList = document.querySelector('.notes__list');
const noteForm = document.querySelector('.notes__form');
const noteInput = noteForm.querySelector('.notes__title');
const noteContent = noteForm.querySelector('.note__content');
const deleteAll = document.querySelector('.notes__button--deleteAll');
 
const notes = JSON.parse(localStorage.getItem('notes')) || [];
const actuallyTime = new Date().toJSON().slice(0,20).replace(/-/g,'/');

const color = document.querySelector(".notes__color");










