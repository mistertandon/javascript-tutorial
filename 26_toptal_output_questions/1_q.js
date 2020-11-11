// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

var bar = null;

if (typeof bar === 'object') {

    console.log('Unfortunately object condition gets passed as typeof null yields object.');
}

if (bar !== null && typeof bar === 'object') {

    console.log('Handle null explicitly');
} else{

    console.log('Fortunately object condition didn\'t get passed as explicitly we have handled null values.');
}