/**
 * Currying is a technique in functional programming where a function that
 * takes multiple arguments is transformed into a sequence of functions
 * that each take a single argument.The resulting functions can be composed
 * together to produce the same result as the original function.
 */

function add(x) {
  return function (y) {
    return x + y;
  };
}

let addFive = add(5); // returns a new function that adds 5 to its argument
console.log(addFive(10)); // outputs 15

// OR
addFive = add(15)(20);
console.log(addFive); // outputs 15