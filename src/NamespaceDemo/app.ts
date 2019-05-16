/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const num = Utility.maxBooksAllowed(25);
console.log(num);

const fee = util.calculateLateFee(10);