let Counter = (function () {

  this.counter = 0;

  displayCounterP = () => {
    console.log(`Counter : ${this.counter}`)
  }

  increaseCounterByOneP = () => {
    console.log('============== Increase Operation ==============');
    this.counter++;
    this.displayCounterP();
  }

  decreaseCounterByOneP = () => {
    console.log('============== Decrease Operation ==============');
    this.counter--;
    this.displayCounterP();
  }

  resetCounterP = () => {
    console.log('============== Reset Operation ==============');
    this.counter = 0;
    this.displayCounterP();
    
  }

  return {
    displayCounter: displayCounterP,
    increaseCounterByOne: increaseCounterByOneP,
    decreaseCounterByOne: decreaseCounterByOneP,
    resetCounter: resetCounterP,
  }

})();

Counter.displayCounter();
Counter.increaseCounterByOne();
Counter.increaseCounterByOne();
Counter.decreaseCounterByOne();
Counter.resetCounter();