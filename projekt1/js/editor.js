const input = document.querySelector('input');
const editor = document.querySelector('#canvas');
const canvas = document.querySelector('#canvas__pEditor');
    var image = new Image();
	canvas.setAttribute('height',editor.clientHeight);
    canvas.setAttribute('width',editor.clientWidth);
    
    let ctx = canvas.getContext('2d');

  
    var image = new Image();

  input.addEventListener('change', updateImageDisplay);

    function updateImageDisplay() {
            
    
        


    let files = input.files;
      

    let list = document.createElement('ul');
        canvas.appendChild(list);
            for(let i =0; i < files.length; i++){
                let listElement = document.createElement('li');
                 
            

            if(validFileType(files[i])){
                

                image.addEventListener('load' , ()=>{
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                })

                   
                image.src = window.URL.createObjectURL(files[i]);
               console.log(image.src);
                listElement.appendChild(image);

                document.getElementById('btn-download').style.display="block";
                 
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



let red = document.getElementById("red"); 
let green = document.getElementById("green"); 
let blue = document.getElementById("blue"); 







function getRed(red) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i] = imageData.data[i] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}


function getGreen(green) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i+1] = imageData.data[i+1] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}


function getBlue(blue) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i+2] = imageData.data[i+2] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}






function negative(){
     
  let GETimg = ctx.getImageData(0,0, canvas.width,canvas.height);
   console.log(ctx.toDataUrl)
    for(let i=0; i<GETimg.data.length; i+=4){

        GETimg.data[i] = -GETimg.data[i] + 255;      
        GETimg.data[i+1] = -GETimg.data[i+1]+ 255;        
        GETimg.data[i+2] = -GETimg.data[i+2] + 255;   
    }
    ctx.putImageData(GETimg,0,0);
    console.log(GETimg);
    
    
}

function clear(){
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    document.getElementById('btn-download').style.display="none";


}



   document.querySelector("#negative").addEventListener('click', ()=>{    negative()})
document.querySelector("#clear").addEventListener('click', ()=>{  clear()})
document.getElementById('btn-download').addEventListener('click', downloadCanvas, false);
red.addEventListener('input', (e)=>{getRed(e.target.value)})
green.addEventListener('input', (e)=>{getGreen(e.target.value)})
blue.addEventListener('input', (e)=>{getBlue(e.target.value)})

function downloadCanvas() {
    let name = prompt("Podaj nazwę obrazka")
    if(name != null){
        this.href = canvas.toDataURL();
    }
  
    this.download = name;
}