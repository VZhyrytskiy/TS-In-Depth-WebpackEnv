/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
var num = Utility.maxBooksAllowed(25);
console.log(num);
var fee = util.calculateLateFee(10);
