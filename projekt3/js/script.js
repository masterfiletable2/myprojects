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

function setNewPointGap(i) {
    let goodGap =[ Math.floor(Math.random() * gaps.length)];
    
    gaps[goodGap].classList.remove("space__gap");
    gaps[goodGap].classList.add("space__goal")
}
//funkcja obliczająca właściwości struktury, sprawdzająca kolizję
function checkCollisions() {

    for (i = 0; i < gaps.length; i++) {
        if (positionY < Math.floor(gaps[i].style.top.slice(0, -2)) + 25
        && positionY > gaps[i].style.top.slice(0, -2) - 25
           && positionX > gaps[i].style.left.slice(0, -2) - 25 && 
           positionX < Math.floor(gaps[i].style.left.slice(0, -2)) + 25) {
           
                if (gaps[i].classList.contains("space__goal")) {
                gaps[i].classList.remove("space__goal");
               

                //jeżeli trafi na zieloną kulkę, to dodaje punkt 
                point++
                counter.innerHTML = "Points: " + point;
                
                setNewPointGap(i);
            }

            //Jeżeli gracz natrafi na dziurę(przegra)
            else if (gaps[i].classList.contains("space__gap")) {
                isPlaying = false;
              
                restart.hidden = false;
            restart.style.display = "block"

//zatrzymaj czas
                clearInterval(timer)
            }
        }
    };
}


//funkcja wpływająca na zmianę pozycji kulki

function changePosition() {
        
    if (positionX + speedX < window.innerWidth - 10 && positionX + speedX > 0) {
        positionX = positionX + speedX;
             space__ball.style.left = positionX + 'px';
        //console.log(space__ball.style.left)
    }

    if (positionY + speedY < window.innerHeight - 10 && positionY + speedY > 0) {
        positionY = positionY + speedY;
              space__ball.style.top = positionY + 'px';
    }

//wywołaj funkcje sprawdzajca kolizje

    checkCollisions();

    if (isPlaying == true) {
        window.requestAnimationFrame(changePosition)
    }
}





//funkcja generująca i dodająca do tablicy elementy kolizyjne w proporcji szerokosci ekronu do stałej 
function spawnGaps() {
    for (i = 2; i < (window.innerWidth / 30); i++) {
        let gap = document.createElement('div');
          gap.classList.add("space__gap");
            gap.style.left = Math.random() * (window.innerWidth - 10) + 'px';
            gap.style.top = Math.random() * (window.innerHeight - 10) + 'px';
        
              gaps.push(gap);
        space.appendChild(gap);
    }
    setNewPointGap(1);
}



