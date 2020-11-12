var a = [1, 2, 3];

a[10] = 99;

console.log(a[4]); // undefined
console.log(a[9]); // undefined

console.log(a.length); // 11