function Human(eyesParam) {

    this.eyes = eyesParam
}

Human.prototype.displayInfo = function () {

    console.log(`Human has ${this.eyes} eyes.`);
}

function Person(nameParam, eyesParam) {

    Human.call(this, eyesParam);
    this.name = nameParam;
}

Person.prototype.constructor = Human;

Person.prototype = Object.create(Person.prototype, Human.prototype);

Person.prototype.displayPersonInfo = function () {
    console.log(` ${this.name} has ${this.eyes} eyes.`);
}

personIns = new Person('Parvesh', 2);
personIns.displayPersonInfo()