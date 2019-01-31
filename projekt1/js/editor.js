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
   
        


    let files = input.files;
      

    let list = document.createElement('ol');
        canvas.appendChild(list);
            for(let i =0; i < files.length; i++){
                let listElement = document.createElement('li');
                 
            

            if(validFileType(files[i])){
                let img = new Image();

                img.src = " ";
                img.addEventListener('load' , ()=>{
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                })


                img.src = window.URL.createObjectURL(files[i]);
               
                listElement.appendChild(img);
            



                 
            }
    
          
        }
    }


const fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file) {
    for(let i = 0; i < fileTypes.length; i++) {
      if(file.type === fileTypes[i]) {
        return true;
      }
    }
  
    return false;
  }


        input.addEventListener('change', updateImageDisplay);
