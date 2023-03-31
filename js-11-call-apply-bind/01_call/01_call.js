/**
 * Demonstartion of basic call functionality.
 */
(function () {

    var getSum = function (c) {

        let sum = 0;

        sum = this.addend_i + this.addend_ii + c;

        return sum;
    }

    var addendParameters = {
        'addend_i': 4,
        'addend_ii': 6
    };

    let sumResult = getSum.call(addendParameters, 5);
    console.log(sumResult)

    var getSumImplicitly = function () {

        let addends = [].slice.call(arguments)

        let sumResult = addends.reduce((accumulator, currentValue) => {

            return accumulator + currentValue;
        })
        console.log(sumResult)
    }

    getSumImplicitly(1, 23, 4, 5);

})();


(function () {

    let Mammel = function (legs) {

        this.legs = legs;
    }

    let Cat = function (legs, isDomistiated) {

        Mammel.call(this, legs)
        this.isDomistiated = isDomistiated;
    }

    let lion = new Cat(4, false);
    console.log(lion);
})();
