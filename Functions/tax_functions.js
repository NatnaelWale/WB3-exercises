"use strict";


function getSocSecTax(grossPay) {

    let socSecTax = (grossPay * 6.2) / 100;

    return socSecTax;

}

function getMedicareTax(grossPay) {

    let mediCareTax = (grossPay * 1.45) / 100;

    return mediCareTax;
}

function getFederalTax(grossPay, withHoldingCode) {

    var taxRate;

    if(withHoldingCode == "0") {
        taxRate = 23;
    }
    else if (withHoldingCode == "1") {
        taxRate = 21;
    }
    else if (withHoldingCode == "2") {
        taxRate = 19.5;
    }
    else if (withHoldingCode == "3") {
        taxRate = 18.5;
    }
    else if (withHoldingCode >= "4") {
        taxRate = 18 - ((withHoldingCode-4)*(0.5));
    }

    let federalTaxWitholding = (grossPay * taxRate) / 100;

    return federalTaxWitholding;

}
console.log("Social Security tax values below this")
console.log(getSocSecTax(10000));

console.log("\nMedicare tax values below this")

console.log(getMedicareTax(10000));

console.log("\nFederal tax values below this")

console.log(getFederalTax(750, 0));

console.log(getFederalTax(1550, 2));

console.log(getFederalTax(1100, 6));

