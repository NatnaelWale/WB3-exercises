"use strict";



function parseAndDisplayName(name) {

let firstNameIndexEnd = name.indexOf(" ");
let middleNameIndexEnd = name.lastIndexOf(" ");

console.log(firstNameIndexEnd);
console.log(middleNameIndexEnd);


if (firstNameIndexEnd == "-1") {

  let fValue = "Name: " + name;
  let lValue = "Only Name: " + name;

  let result = fValue + "\n" + lValue;

  return result;
} else if (firstNameIndexEnd == middleNameIndexEnd) {
    let firstName = name.substring(0 , firstNameIndexEnd);
    let fValue = "First Name: " + firstName;
    let lastName = name.substring(firstNameIndexEnd + 1);
    let lValue = "Last Name: " + lastName;
    let fullName = "Name: " + firstName + " " + lastName;
    let result = fullName + '\n' + fValue + '\n' + lValue;

    return result;
} else if (firstNameIndexEnd < middleNameIndexEnd) {
    let firstName = name.substring(0 , firstNameIndexEnd);
    let fValue = "First Name: " + firstName;
    let middleName = name.substring(firstNameIndexEnd + 1, middleNameIndexEnd);
    let mValue = "Middle Name: " + middleName;
    let lastName = name.substring(middleNameIndexEnd + 1);
    let lValue = "Last Name: " + lastName;
    let fullName = "Name: " + firstName + " " + middleName + " " + lastName;
    let result = fullName + '\n' + fValue + '\n' + mValue + '\n' + lValue;
    
    return result;
}

}

//Index Values 0123
// var person1 = "Cher";

//Index Values 01234567891
var person2 = "Brenda Kaye";

// //Index Values 012345678911234
// var person3 = "Dana Lynn Wyatt";

// console.log(parseAndDisplayName(person1));
// console.log("-----------------------------")
console.log(parseAndDisplayName(person2));
console.log("-----------------------------")
// console.log(parseAndDisplayName(person3));


