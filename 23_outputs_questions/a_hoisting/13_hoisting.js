/**
 * Block 1
 */
function hoistingExample() {

    a = 1;
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
console.log(a); // ReferenceError: a is not defined