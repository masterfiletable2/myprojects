
document.addEventListener('DOMContentLoaded', appStart);

const sounds={
    97 :"boom",
    115:"clap",
    100:"hihat",
    102:"kick",
    103:"openhat",
    104:"ride",
    106:"snare",
    107:"tink",
    108:"tom",
}

const channels={
    channel1:[],
    channel2:[],
    channel3:[],
    channel4:[]
   }





   let checkList = document.querySelectorAll(".channel__check");
   let radioList = document.querySelectorAll(".channel__radio")   




function appStart(){

    window.addEventListener('keypress',readKey);

 
    document.querySelector('#record').addEventListener('click',recAudio);
    document.querySelector('#play').addEventListener('click',playAudio);

   

  

    
    }   
    
   
        function readKey(e){
            e.preventDefault();
        
        if(!sounds[e.charCode])      return
      
         const soundTitle = sounds[e.charCode];
   
        
        playSound(soundTitle);
        }
        
        //odtwarzanie dzwieku 
        function playSound(soundTitle){
       let audio = document.querySelector(`#${soundTitle}`);
         audio.currentTime=0; 
         audio.play(); 
        
    }





    
    
function playAudio(){  
   
   

    for(let j=0;j<checkList.length;j++){
        
           if(checkList[j].checked===true){
             
          
          

         channels["channel"+(j+1)].forEach(sound =>{  
             setTimeout(
             
                 ()=>{ 
                  const soundObject = document.querySelector(`#${sound.name}`);
                  soundObject.currentTime=0;
                  soundObject.play();
                 },sound.time
          
             )
      
      })
     } 
     
    }

         
     
 
 }




 let recording = false;
 let startTimerRecord = 0; 

function recAudio(event){
    event.preventDefault();
    event.stopPropagation();
recording=!recording;
startTimerRecord=Date.now();
event.target.innerHTML=recording?'◼':'◉';
if(recording){
    event.target.style.background="#ff0000";
}
else{
    event.target.style.background="#e5e5e5";
}
}



function readKey(e){
    e.preventDefault();

if(!sounds[e.charCode]){
    return
}

 const soundName = sounds[e.charCode];



playSound(soundName);
}


function playSound(soundName){
 soundObject = document.querySelector(`#${soundName}`);
 soundObject.currentTime=0; 
 soundObject.play();
 



if(recording){
 
    for(let i=0;i<radioList.length;i++){

        if(radioList[i].checked===true){
    
      channels["channel"+(i+1)].push(
          {
      name: soundName,
      time:Date.now() - startTimerRecord
      }
     )
 }
  
      }
}

}


/*
function addChannell(){
    let channel__list = document.querySelector('.channel__list')
    channel__list.appendChild(" <li class='channel__list__element'> <input type='checkbox' class='check radio-check' name='channel4' data-channel='channel4'>Channel 4</li>")
}
*/