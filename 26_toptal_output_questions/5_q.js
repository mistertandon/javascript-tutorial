console.log(typeof undefined == typeof null); // false
console.log(typeof undefined === typeof null); // false

console.log(typeof undefined == typeof NULL); // true
console.log(typeof undefined === typeof NULL); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log((undefined + 5) == NaN); // false
console.log((undefined + 5) === NaN); // false