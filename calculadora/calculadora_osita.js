let display = document.getElementById("display");
let sound = new Audio("click-kawaii.mp3");
function playSound(){sound.currentTime=0;sound.play();}
function appendValue(value){playSound();display.value+=value;}
function clearDisplay(){playSound();display.value="";}
function calculateResult(){playSound();try{display.value=eval(display.value);}catch(e){display.value="Error";}}
