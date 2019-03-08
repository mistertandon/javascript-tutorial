var mySingleton = (function () {

  var instance;

  function init() {

    var basket = [];

    addItemPrivate = (item) => {
      basket.push(item);
    }

    deleteItemPrivate = (item) => {
      basket.pop(item);
    }

    countItemPrivate = () => {

    }

    displayItemPrivate = () => {

      if (basket.length == 0) {
        console.log('Basket is empty.');
      } else {
        basket.map(item => console.log(item));
      }

    }

    return {
      addItem: addItemPrivate,
      deleteItem: deleteItemPrivate,
      countItem: countItemPrivate,
      displayItem: displayItemPrivate
    }
  }

  return {

    getInstance: function () {

      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
})();

let myInstance = mySingleton.getInstance();
myInstance.displayItem();
