function hoistingExample() {

    console.log("Value of a in local scope: ", a); // Value of a in local scope: 1
}

console.log("Value of a in global scope: ", a); // Value of a in global scope: undefined

var a = 1;

hoistingExample();