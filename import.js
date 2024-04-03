
let display = document.getElementById('display')

function appendToDisplay(input){
        display.value += input;
}

function culculate(){

   try {
    display.value = eval(display.value);
   } catch (error) {
    display.value = 'error'
   }
     
}

function clearDisplay(){
    display.value = ""
}












