var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


var copiedPerson = person;

copiedPerson.firstName = 'Jane'; // connected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(person);

/**
 * {
 *     firstName: 'Jane',
 *         lastName: 'Doe',
 *             address:
 *     {
 *         street: 'Amphitheatre Parkway',
 *             city: 'Mountain View',
 *                 state: 'CA',
 *                     country: 'USA'
 *     }
 * }
 * 
 * */

 
console.log(copiedPerson);

/**
 * {
 *     firstName: 'Jane',
 *         lastName: 'Doe',
 *             address:
 *     {
 *         street: 'Amphitheatre Parkway',
 *             city: 'Mountain View',
 *                 state: 'CA',
 *                     country: 'USA'
 *     }
 * }
 * 
 * */