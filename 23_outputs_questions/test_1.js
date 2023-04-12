var item_i = {'car': 2, 'scooter': 3};

var item_ii = item_i;

console.log(item_i); // {car: 2, scooter: 3}

console.log(item_ii) // {car: 2, scooter: 3}

item_i.car = 21;

console.log(item_i) // {car: 21, scooter: 3}
console.log(item_ii) // {car: 21, scooter: 3}

item_ii = {'car': 211, 'scooter': 311};

console.log(item_i) // {car: 21, scooter: 3}
console.log(item_ii) // {'car': 211, 'scooter': 311};

delete item_ii['car']; // true

console.log(item_i); // {car: 21, scooter: 3}
console.log(item_ii); // {scooter: 311}