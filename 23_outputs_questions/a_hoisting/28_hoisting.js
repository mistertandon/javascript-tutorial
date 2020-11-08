function localScopeExample() {

    // LOCAL SCOPE
    var name = 'xyz';
    console.log(name); // xyz
}
// GLOBAL SCOPE
console.log(name); // ReferenceError: name is not defined