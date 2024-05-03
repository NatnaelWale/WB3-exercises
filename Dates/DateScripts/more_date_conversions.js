"use strict";

let myBirthDate = new Date("05/02/1997");

let momBirthDay = new Date("MAY 05 1960");

let dadBirthDay = new Date(2024, 6, 15);



let myBirth = new Date(myBirthDate);

let momBirth = new Date(momBirthDay);

let dadBirth = new Date(dadBirthDay);





console.log(myBirth.toLocaleString());
console.log("----------------------------")
console.log(momBirth.toLocaleString());
console.log("----------------------------")
console.log(dadBirth.toLocaleString());