const space = document.querySelector(".space")
const space__ball = document.querySelector("#space__ball");
const spaceHUD = document.querySelector(".space__HUD")

let isPlaying = false;
let gaps = [];

const start = document.querySelector("#space__options__start");
const restart = document.querySelector("#space__options__restart");

//nasłuchiwanie akcelometru
window.addEventListener('deviceorientation', orientation)

let timer = 0;
let time = 0;
let point = 0;

let speedX = 0;
let speedY = 0;

let positionX = 1
let positionY = positionX;





//punkt startowy odpowiadajacy za potwierdzenie rozpoczetej gry, w tym za pojawienie sie obiektow, start funkcji odliczania, czasu itd
 start.addEventListener("click", () => {
  
    isPlaying = true;
    spawnGaps();
    changePosition();
    start.style.display="none";
   
    pointCounter()
    timeCounter();


}
 )

restart.addEventListener("click", ()=> {
 location.reload();
})


//funkcja tworzaca kontener punktow
function pointCounter(){
    counter = document.createElement('div');
    counter.classList.add("space__counter");
    counter.innerHTML = "Points: " + point;
    spaceHUD.appendChild(counter);


}


//funkcja tworzaca kontener punktow oraz odmierzajaca czas
function timeCounter(){
    
    timeCounter = document.createElement('div');
    timeCounter.classList.add("space__time");

  timer = setInterval(function timer(){
   time++;
   timeCounter.innerHTML = "Czas: "+ time + "s";
   
}, 1000);
spaceHUD.appendChild(timeCounter)    


}

//funkcja odpowiadajaca za wymierzenie wartosci akcelometru
function orientation(targ) {
    
    speedX = targ.gamma / 10
    speedY = targ.beta / 10
//    console.log(targ);

}




