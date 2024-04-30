"use strict";


function convertCtoF(celsius) {

    let fahrenheit = (celsius * 1.8 ) + 32;

    return fahrenheit;

}

let currentTemp = 100;

let fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");

currentTemp = 45;

fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");

currentTemp = 19;

fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");

currentTemp = 0;

fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");

currentTemp = -7;

fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");

currentTemp = -40;

fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

console.log("---------------------------------");



