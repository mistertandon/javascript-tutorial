function x() {

    y = 1;
    var z = 2;
}

x();

console.log(y); // 1, Since, y is Undeclared variable which is always global.
console.log(z); // z is not defined.