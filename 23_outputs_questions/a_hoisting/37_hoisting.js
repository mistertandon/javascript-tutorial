/**
 * Block 1
 */
var a = 1;

function hoistingExample() {

    console.log(a); // 1
}

hoistingExample();

console.log(a); // 1

/**
 * Block 2
 */
function hoistingExample() {

    var a = 1;
}

hoistingExample();
console.log(a); // undefined