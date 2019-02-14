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


let isRecording = false;
let recStartTime = 0;
let radioList;

let audioDOM;


const channels={
    channel1:[],
    channel2:[],
    channel3:[],
    channel4:[]
   }