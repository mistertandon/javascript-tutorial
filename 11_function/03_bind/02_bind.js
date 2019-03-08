(function () {

    let animal = {
        name: 'dog',
        sound: 'bark',
        getAnimalSound: function () {

            console.log(`${this.name} talking way is: ${this.sound}`);
        }
    };

    animal.getAnimalSound();

    let animalSoundFuncRef = animal.getAnimalSound;
    /**
     * Following statement would print "undefined talking way is: undefined",
     * when we assign 'function, part of an object' to another variable. In
     * this process we are going to loss reference of assigned function.
     */
    animalSoundFuncRef();

    /**
     * Solution to above problem
     */
    let animalSoundFuncRefWithBind = animal.getAnimalSound.bind(animal);
    animalSoundFuncRefWithBind();
})();