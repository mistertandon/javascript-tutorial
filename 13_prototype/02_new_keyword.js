function Person(saying) {

    this.saying = saying;
}

Person.prototype.talk = function () {

    console.log(`Person says : ${this.saying}`);
}

function newMimic(constructor) {

    // Step 1: Create a new Object
    var obj = {};
    var argsArray;

    // Step 2: Set the prototype
    Object.setPrototypeOf(obj, constructor.prototype);

    argsArray = Array.prototype.slice.call(arguments, 1);

    //Step 3: Execute constructor with this.
    constructor.apply(obj, argsArray);

    //Step 4: Return object.
    return obj;
}

var Parvesh = newMimic(Person, 'Welcome!!!');
Parvesh.talk();