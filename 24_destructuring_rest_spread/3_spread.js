/**
 * I have the following objects like
 * obj1 = { key1: { a: 1}}
 * 
 * I want to merge the following object with the above 
 * key1 = { b: 2}
 * 
 * I want to get the result as following by merging the key1 with the existing key in the first object. 
 * {key1: {a: 1, b: 2}}
 */

const obj1 = { key1: { a: 1 } };

const key1 = { b: 2 };

const result = {key1: {...key1, ...obj1.key1}};

console.log(result);