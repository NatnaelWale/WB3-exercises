"use strict";



let currentTime = new Date();


let date = currentTime.getDate();

let month = currentTime.getMonth();

let year = currentTime.getFullYear();

let day = currentTime.getDay();

if ( day == "1") {
   var dayName = "Monday"
}
else if ( day == "2") {
    var dayName = "Tuesday"
 }
else if ( day == "3") {
    var dayName = "Wednesday"
 }
 else if ( day == "4") {
    var dayName = "Thursday"
 }
 else if ( day == "5") {
    var dayName = "Friday"
 }
 else if ( day == "6") {
    var dayName = "Saturday"
 }
 else if ( day == "7") {
    var dayName = "Sunday" 
 }


console.log(date + '-' + month + '-' + year + "(" + dayName + ')')

