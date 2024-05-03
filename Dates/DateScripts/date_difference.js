"use strict";


let startDate = new Date();

let endDate = new Date("November 11, 2024");

let milliSecInDay = 1000 * 60 * 60 * 24;

let getStartTime = startDate.getTime();

let getEndTime = endDate.getTime();

console.log(getEndTime, getStartTime);

let timeDifference = (getEndTime - getStartTime)/ milliSecInDay;

console.log(timeDifference);

let result = Math.round(timeDifference);

console.log("The difference between the date of  " + startDate.toDateString() + " and the date of " + endDate.toDateString() + " is " + result + " days.");