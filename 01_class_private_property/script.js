var CharacterRecognization = function (character) {

    // var regEx : It acts as a private variable.
    // Instance of CharacterRecognization class can't access this variable.
    var regEx = {'uppercase': /[A-Z]/, 'lowercase': /[a-z]/, 'number': /[0-9]/};
    this.charactersStack = [];

    Object.defineProperty(this, '_compRes', {
        configurable: true,
        enumerable: true,
        get: function () {

            console.log('All tested characters are = ' + this.charactersStack);
        },
        set: function (cTestChar) {

            this.charactersStack.push(cTestChar);
        }

    });

    this._inputChar = character;
    this._processing = function () {

        for (inputType in regEx) {

            this._compRes = null;
            this._compRes = this._inputChar.match(regEx[inputType]);
            if (this._compRes) {

                this._displayResult(inputType);

                return;
            }
        }

        this._displayResult('special');
    }
}

CharacterRecognization.prototype._displayResult = function (dataType) {

    console.log('input charater was ' + dataType + ' character.');

    return;
}

var technology = function (inputCharater) {

    return new CharacterRecognization(inputCharater);
}


myTechnology_i = technology('#'); // Inputs for testing : 1, a, A, @
console.log(myTechnology_i);
myTechnology_i._processing();
