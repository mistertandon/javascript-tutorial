```
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string 

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and 
// contained values
var a = [1, null, 'abra']; 

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', function() {
  someElement.style.backgroundColor = 'blue';
}, false);
```