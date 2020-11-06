function hoistingExample() {

    var a = undefined;
    console.log("Before: ", a);  // Before:  undefined
    
    a = 10;
    console.log("After: ", a);  // After:  10
}

hoistingExample();