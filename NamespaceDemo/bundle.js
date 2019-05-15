var Utility;
(function (Utility) {
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function privateFunc() {
        console.log("This is private function...");
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts"/>
var num = Utility.maxBooksAllowed(25);
console.log(num);
var util = Utility.Fees;
var fee = util.calculateLateFee(12);
