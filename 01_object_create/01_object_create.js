let cat = {

  makeSound: function () {
    console.log(`Cat is saying : ${this.sound}`);
  }
};

let memuPet = Object.create(cat);

Object.defineProperty(memuPet, 'sound', {
  'value': 'meeeowwww',
  'configurable': true,
  'enumerable': true,
  'writable': true
})

memuPet.makeSound();

let isCatPrototypeOfMemu = cat.isPrototypeOf(memuPet);
console.log(`isCatPrototypeOfMemu : ${isCatPrototypeOfMemu}`);