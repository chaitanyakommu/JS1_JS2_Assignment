// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

function date_time()
 {
    const date = new Date();
    const day=date.toDateString();
    console.log(day);
    const time = date.toLocaleTimeString(); 
    console.log(time); 
 }

date_time();


function setMsg()
  {
    console.log("I'm ready after 5 seconds");
  }
 setTimeout(setMsg,5000);
 

let celtemp=20;
function displaytemp(){

   let forenheit= (celtemp*9/5)+32;
   console.log(`The forenheit value of ${celtemp} Celsius is ${forenheit}`);
}
 displaytemp();
let forentemp=68;
function displaytemp1(){
let celsiustemp=(forentemp-32)*5/9;
console.log(`The celsius temperature of ${forentemp} forenheit is ${celsiustemp}`);
}
displaytemp1();
