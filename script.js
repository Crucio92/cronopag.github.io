let timer;
let hours = 0;
let minutes = 0;
let seconds = -1;

document.getElementById('startBtn').addEventListener('click', function() {
 if (!timer) {  
 timer = setInterval(updateDisplay,1000);
 }
});

document.getElementById('stopBtn').addEventListener('click', function() {
 clearInterval(timer);
 timer=null; 
});

function updateDisplay() { 
 seconds++;
 
 if(seconds >59){
  seconds=0; 
  minutes++;  

  if(minutes>59){
   minutes=0;  
   hours++;

   if(hours >24){
    clearTimer();
    return false;   
   }
  } 
 }

var hS,hM,hH;

hH=(hours<10)?"0"+hours : hours; 
hM=(minutes<10)?"0"+minutes : minutes;
hS=(seconds<10)?"0"+seconds : seconds;

document.getElementById("display").innerHTML=hH+":"+hM+":"+ hS;

}