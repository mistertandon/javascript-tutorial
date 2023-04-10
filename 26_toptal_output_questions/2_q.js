/**
 * Here's what's happening step-by-step:
 *
 * > The right-most b = 3 assignment is evaluated first, which assigns the value 3 to the global variable b.
 *
 * > Then, the var a declaration is evaluated, which declares a new variable a in the current scope.
 *
 * > Finally, the left-most a = b assignment is evaluated, which assigns the value of b (which is 3) to the variable a.
 */
(function () {

    var a = b = 3;
})();

console.log("a undefined? " + (typeof a === 'undefined')); // true
console.log("b undefined? " + (typeof b === 'undefined')); // false