var x = 'a';
var y = x;

console.log(y) // "a"
console.log(x) // "a"

x = 'c'
console.log(y); // "a"

y = 'd';
console.log(x); // "c"
console.log(y); // "d"