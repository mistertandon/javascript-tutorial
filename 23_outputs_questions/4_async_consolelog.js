console.log(1);
console.log(setTimeout(() => {console.log(2)}), 0);
console.log(setTimeout(() => {console.log(4)}), 0);
console.log(5);
console.log(setTimeout(() => {console.log(6)}), 0);
console.log(setTimeout(() => {console.log(7)}), 0);
console.log(8);