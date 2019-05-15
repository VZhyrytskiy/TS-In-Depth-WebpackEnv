/// <reference path="utility-functions.ts"/>

const num = Utility.maxBooksAllowed(25);
console.log(num);

import util = Utility.Fees;
const fee = util.calculateLateFee(12);
