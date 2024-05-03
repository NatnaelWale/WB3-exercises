"use strict";

window.onload = init;

let btn = document.getElementById("clickBtn");


function init() {
btn.onclick = onBtnClicked;
}


function onBtnClicked() {
    
let messageBox = document.getElementById("message");

let inputDate = document.getElementById("dateValue").value;

messageBox.innerHTML = inputDate.toString();

return;
}


onBtnClicked();


// function onBtnClicked() {
//    let messageBox = document.getElementById("message");

//    let inputDate = document.getElementById("dateValue").value;

//    let date = inputDate.toString();


// messageBox.innerHTML = date;

// return;

// }

// onBtnClicked();

