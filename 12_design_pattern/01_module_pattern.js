let Counter = (function () {

  this.counter = 0;

  /**
   * Private function <displayCounterP>
   */
  displayCounterP = () => {
    console.log(`Counter : ${this.counter}`)
  }

  /**
   * Private function <increaseCounterByOneP>
   */
  increaseCounterByOneP = () => {
    console.log('============== Increase Operation ==============');
    this.counter++;
    this.displayCounterP();
  }

  /**
   * Private function <decreaseCounterByOneP>
   */
  decreaseCounterByOneP = () => {
    console.log('============== Decrease Operation ==============');
    this.counter--;
    this.displayCounterP();
  }

  /**
   * Private function <resetCounterP>
   */
  resetCounterP = () => {
    console.log('============== Reset Operation ==============');
    this.counter = 0;
    this.displayCounterP();

  }

  return {

    /**
     * Public property <patternName>
     */
    'patternName': 'Module Pattern',

    /**
     * Public function <displayCounter> utilizing private method <displayCounterP>
     */
    'displayCounter': () => {
      displayCounterP();
    },

    /**
     * Public function <increaseCounterByOne> utilizing private method <increaseCounterByOneP>
     */
    'increaseCounterByOne': () => {
      increaseCounterByOneP();
    },

    /**
     * Public function <decreaseCounterByOne> utilizing private method <decreaseCounterByOneP>
     */
    'decreaseCounterByOne': () => {
      decreaseCounterByOneP();
    },

    /**
     * Public function <resetCounter> utilizing private method <resetCounterP>
     */
    'resetCounter': () => {
      resetCounterP();
    },
  }

})();

Counter.displayCounter();
Counter.increaseCounterByOne();
Counter.increaseCounterByOne();
Counter.decreaseCounterByOne();
Counter.resetCounter();