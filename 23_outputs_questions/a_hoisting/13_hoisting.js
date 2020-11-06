/**
 * Block 1
 */
function hoistingExample() {

    a = 1;
}

hoistingExample();

console.log(a); // a is not defined

/**
 * Block 2
 */
function hoistingExample() {

    var a = 1;
}

hoistingExample();
console.log(a); // a is not defined