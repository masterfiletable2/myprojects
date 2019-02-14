document.addEventListener('DOMContentLoaded', appStart);


let isRecording = false;
let recStartTime = 0;
let radioList;
let checkList;
let clearList;
let touch;
let audioDOM;



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

    document.querySelector('#rec').addEventListener('touchstart',recAudio);
    document.querySelector('#play').addEventListener('touchstart',playAudio);
    clearList=document.querySelectorAll(".remove");
    radioList=document.querySelectorAll(".radio-check")   
    checkList=document.querySelectorAll(".check");
    touch= document.querySelectorAll(".sound__button__name");

   }