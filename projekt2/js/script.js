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


function appStart(){

    window.addEventListener('keypress',readKey);

   
   let divs = document.querySelectorAll(".sounds__button");

    }   
    
    //funkcja przekazujaca klawisz do zmiennej soundTitle, odtwarzajaca dzwiek za pomoca innej funkcji playSound
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

    
