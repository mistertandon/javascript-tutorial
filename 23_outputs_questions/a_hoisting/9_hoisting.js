function hoistExample() {

    a;
    console.log("Before: ", a); // Before:  undefined
    
    var a = 10;
    console.log("After: ", a); // After:  10
}

hoistExample();
