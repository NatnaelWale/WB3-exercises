"use strict";


function convertFtoC(fahrenheit) {

    let celsius;

    celsius = (fahrenheit - 32) * 5/9;

    return celsius;
}

let input = 80;

let output = convertFtoC(input);

console.log(output);

input = 20;

output = convertFtoC(input);

console.log(output);


