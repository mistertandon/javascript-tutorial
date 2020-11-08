function outer() {

    var name = 'outer';
    return function inner() {

        console.log(name);
    }
}
// returns the inner function    
const output = outer();
output(); // outer