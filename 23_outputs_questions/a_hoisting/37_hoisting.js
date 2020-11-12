/**
 * Block 1
 */
var a = 1;

function hoistingExample() {

    console.log(a);
}

hoistingExample();

console.log(a); 

/**
 * Block 2
 */
function hoistingExample() {

    var a = 1;
}

hoistingExample();
console.log(a); // 