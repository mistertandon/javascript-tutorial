/**
 * 
 * Below code block demonstrate <AnimalClass> definition.
 */
var AnimalClass = (function (document, window) {

    /**
     * Definition for animal class.
     * 
     * @param {string} uiAnimalName User input animal name.
     * @returns Class animal class
     */
    function animal(uiAnimalName) {
        /**
         * _animalNamesArr: This variable will contained history of animal name,
         * has been assgned during its lifecyle.
         */
        this._animalNamesArr = [];

        /**
         * _animalName: This variable will contained most recently assigned
         * animal name.
         */
        this._animalName;

        /**
         * Beow code block demonstrate how we can define property into a class with
         * getter and setter function.
         */
        Object.defineProperty(this, 'tuiAnimalName', {
            enumerable: true,
            configurable: true,
            get: function () {

                return this._animalName;
            },
            set: function (value) {

                this._animalNamesArr.push(value);
                return this._animalName = value;
            }
        });

        /**
         * tuiAnimalName: Track user input animal name.
         */
        this.tuiAnimalName = uiAnimalName;
    }

    animal.prototype.name = function () {

        console.log('Animal name is ' + this._animalName);
    }

    /**
     * 
     * In below code block we are going to return <animal> class.
     */
    return animal;

})(document, window);

/**
 * 
 * Below code block demonstrate <TerrestrialAnimalClass> definition.
 */
var TerrestrialAnimalClass = (function (document, window, AnimalClass) {

    function terrestrialAnimal(uiTAnimalName, runningMPH) {

        AnimalClass.call(this, uiTAnimalName);

        this.runningMPH = runningMPH;
    }


    

    /**
     * Below cod block stres reference for terrestrialAnimal constructor.
     */
    terrestrialAnimal.prototype.constructor = terrestrialAnimal;

    /**
     * Below code block inherit AnimalClass into terrestrialAnimal.
     */
    terrestrialAnimal.prototype = Object.create(AnimalClass.prototype, terrestrialAnimal.prototype);

    terrestrialAnimal.prototype.runningCharateristic =  function () {

            console.log(this._animalName + ' is able to run at ' + this.runningMPH + ' MPH');
        }
    return terrestrialAnimal;

})(document, window, AnimalClass);

var LionObj = new TerrestrialAnimalClass('Lion', 50);
LionObj.runningCharateristic();
LionObj.name();
