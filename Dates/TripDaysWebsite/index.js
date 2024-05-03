"use strict";




window.onload = init;

let submitBtn = document.getElementById("submitBtn");

function init() {
   submitBtn.onclick = calculateDifference;
}

function calculateDifference() {

    let messageBox = document.getElementById("messageBox");

    var travelDate = document.getElementById("travelDate").value;

    console.log(travelDate);

    let startDate = new Date();

    console.log(startDate);

    let endDate = new Date(travelDate);

    let milliSecInDay = 1000 * 60 * 60 * 24;

    let getStartTime = startDate.getTime();

    let getEndTime = endDate.getTime();

    console.log(getEndTime, getStartTime);

    let timeDifference = (getEndTime - getStartTime)/ milliSecInDay;

    console.log(timeDifference);

    let result = "Your trip is in " + Math.round(timeDifference) + " days.";

    messageBox.innerHTML = result;

    return;

}

calculateDifference()







