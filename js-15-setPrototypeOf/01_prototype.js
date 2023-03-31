let talk = function () {
    console.log(this.sound);
    console.log(this);
}

let animal = {
    talk
}

let dog = {
    sound: 'bark!'
}

Object.setPrototypeOf(dog, animal);
dog.talk();

let labrador = {
    mySound: function () {
        console.log(`Labrador Sound is: ${this.sound}`);
    }
}

labrador.mySound();

/**
 * After setting labrador prototype
 */
Object.setPrototypeOf(labrador, dog);
labrador.mySound();
labrador.talk();