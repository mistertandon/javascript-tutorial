var a = [1, 2, 3];

a[10] = 99;

console.log(a[4]); // undefined
console.log(a[9]); // undefined

console.log(a.length); // 11

/**
 * When an array element is assigned a value at an index that is greater than the
 * current length of the array, JavaScript automatically creates "empty slots" in
 * the array to accommodate the new element. These empty slots are represented by
 * the value undefined.
 *
 */
