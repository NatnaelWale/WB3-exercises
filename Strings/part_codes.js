"use strict";

// 0123456789
// ACME:123-L

function getSupplier(code) {
   let supplierIndexEnd = code.indexOf(":");
   let supplierName = code.substring(0 , supplierIndexEnd);

   return supplierName;
}

// console.log(getSupplier("ACME:123-L"))

function getProductNumber(code) {
    let productNumberIndexBegining = code.indexOf(":")
    let productNumberIndexEnd = code.indexOf("-");
    let productNumber = code.substring(productNumberIndexBegining + 1, productNumberIndexEnd);
    
    return productNumber;
}

// console.log(getProductNumber("ACME:123-L"))

function getSize(code) {
   let productSizeIndexStart = code.indexOf("-");
   let productSize = code.substring(productSizeIndexStart + 1); 

//    console.log(productSize);

   if (productSize == "L") {
    let sizeName = "large"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   } else if (productSize == "M") {
    let sizeName = "medium"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   } else if (!isNaN(productSize)) {
    let sizeName = "size"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   };
}

// console.log(getSize("ACME:123-L"))

let item1 = "ACME:123-L"

let item2 = "DI:12345-M"

let item3 = "ACE:1-12"

console.log("The " +  getSize(item1) + " part " + getProductNumber(item1) + " is supplied by " + getSupplier(item1));
console.log("-----------------------------------------------------------------------------")
console.log("The " +  getSize(item2) + " part " + getProductNumber(item2) + " is supplied by " + getSupplier(item2));
console.log("-----------------------------------------------------------------------------")
console.log("The " +  getSize(item3) + " part " + getProductNumber(item3) + " is supplied by " + getSupplier(item3));

