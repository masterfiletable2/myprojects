const input = document.querySelector('input');
const editor = document.querySelector('#canvas');
const canvas = document.querySelector('#canvas__pEditor');


	canvas.setAttribute('height',editor.clientHeight);
    canvas.setAttribute('width',editor.clientWidth);
    
    let ctx = canvas.getContext('2d');

    function updateImageDisplay() {
        while(canvas.firstChild){
            canvas.removeChild(canvas.firstChild);
        }
    }

    input.addEventListener('change', updateImageDisplay);

    let files = input.files;
    let list = document.createElement('ol');
        canvas.appendChild(list);
            for(let i =0; i < files.length; i++){
                let listElement = document.createElement('li');
                 
            }