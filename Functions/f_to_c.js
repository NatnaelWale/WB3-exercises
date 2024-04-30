"use strict";


function convertFtoC(fahrenheit) {

    let celsius;

    celsius = (fahrenheit - 32) * 5/9;

    return celsius;

}

let currentTemp = 92;

let celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = 212;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = 90;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = 72;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = 32;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = 0;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");

currentTemp = -40;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp);

console.log("---------------------------------");


