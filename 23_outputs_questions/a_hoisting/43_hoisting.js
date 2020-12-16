/**
 Javascript itself process [truthy and falsy values][1]:

 In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).

 When used with the && operator, the returned value depends on the left value:

 If the left value is truthy, the right value is returned.
 If the left value is falsy, its value is returned.
 */

console.log(1 && "hello") // => "hello"
console.log(1 && false) // => "hello"
console.log("a string" && "hello") // => "hello"

// Falsy values
console.log(0 && "hello") // => 0
console.log(false && "hello") // => false
console.log(null && "hello") // => null
console.log(undefined && "hello") // => undefined
console.log([] && "hello") // => "hello"