let cat = {

  makeSound: function () {
    console.log(`Cat is saying : ${this.sound}`);
  }
};
/**
 * The Object.create() static method creates a new object,
 * using an existing object as the prototype of the newly created object.
 */
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