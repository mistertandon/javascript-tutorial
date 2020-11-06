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


var copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(person);
/**
 * {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   address: {
 *       street: 'North 1st street',
 *       city: 'San Jose',
 *       state: 'CA',
 *       country: 'USA'
 *   }
 * }
 **/