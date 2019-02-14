//zapisywanie klas/ id do zmiennych
const input = document.querySelector('input');
const editor = document.querySelector('#canvas');
const canvas = document.querySelector('#canvas__pEditor');
//dopasowanie kanwy do rozmiaru #canvas
	canvas.setAttribute('height',editor.clientHeight);
    canvas.setAttribute('width',editor.clientWidth);
    
    //tworzenie kanwy
    let ctx = canvas.getContext('2d');

  //obiekt, na którym operuję
    const image = new Image();


    //po zmianie wywołaj funkcję, która odpowaida za pobieranie obrazka
  input.addEventListener('change', updateImageDisplay);

    function updateImageDisplay() {
            
    
        


    let files = input.files; 
      

    let list = document.createElement('img');

//operowanie na nowo wprowadzonym elemencie img
    canvas.appendChild(list);


            for(let i =0; i < files.length; i++){
                          
           //uzywam niestandardowej funkcji do sprawdzenia poprawnosci np typu
            if(validFileType(files[i])){
                

                image.addEventListener('load' , ()=>{
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                })

                   // Generowanie miniatury
                image.src = window.URL.createObjectURL(files[i]);
               console.log(image.src);
                listElement.appendChild(image);

                document.getElementById('btn-download').style.display="flex";
            }
    
          
        }
        
    }


// typy obrazow
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





//Funkcja zarzadzania kolorem czerwieni, index i w petli odnosi sie do kolou Czerwonego

function getRed(red) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i] = imageData.data[i] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}

//Funkcja zarzadzania kolorem zielonym, index i+1 w petli odnosi sie do kolou Zielonego
function getGreen(green) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i+1] = imageData.data[i+1] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}

//Funkcja zarzadzania kolorem niebieskim, index i w petli odnosi sie do kolou Niebieskiego
function getBlue(blue) { 
    let imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData);

    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i+2] = imageData.data[i+2] +10;
    }

    ctx.putImageData(imageData, 0, 0);

}





//Funkcja odwrocania barw
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

//Funkcja "zerowania" utworzonego img
function clear(){
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    document.getElementById('btn-download').style.display="none";//ukrywanie przycisku, jezeli obiekt img zostal wyczyszczony


}



   document.querySelector("#negative").addEventListener('click', ()=>{    negative()})
document.querySelector("#clear").addEventListener('click', ()=>{  clear()})
document.getElementById('btn-download').addEventListener('click', downloadCanvas, false);
red.addEventListener('input', (e)=>{getRed(e.target.value)})
green.addEventListener('input', (e)=>{getGreen(e.target.value)})
blue.addEventListener('input', (e)=>{getBlue(e.target.value)})


//funkcja pobierania przetworzonego obrazku
function downloadCanvas() {
    let name = prompt("Podaj nazwę obrazka")
    if(name != null){
        this.href = canvas.toDataURL();
    }
  
    this.download = name;
}