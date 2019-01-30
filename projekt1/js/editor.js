
const canvas = document.querySelector('#canvas');
const editor = document.querySelector('#canvas__pEditor');

let menuElements = document.querySelectorAll('.canvas__nav__element');
  
let ctx = canvas.getContext('2d');
    canvas.setAttribute('height', canvas.clientHeight);
    canvas.setAttribute('width', canvas.clientWidth);

