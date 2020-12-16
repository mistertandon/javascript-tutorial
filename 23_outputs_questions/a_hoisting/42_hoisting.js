var a = 1;

function hoistingExample() {

    a++;
    console.log(a); // 2
}

console.log('Before: ', a);
console.log(hoistingExample());
console.log('After: ', a);