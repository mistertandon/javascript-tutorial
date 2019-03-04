(function () {

  let coordinates_i = {
    'x': 5,
    'y': 10
  }

  let coordinates_ii = {
    'x': 25,
    'y': 310
  }

  let printCoordinates = function () {

    console.log(` X coordinate: ${this.x} \n Y coordinate: ${this.y}`)
  }

  /**
   * How Bind Method works
   * 
   * 1. Bind an object to a function
   * 2. Reference it using this
   */
  let bindedPrintCoordinates = printCoordinates.bind(coordinates_i);
  bindedPrintCoordinates();

  bindedPrintCoordinates = printCoordinates.bind(coordinates_ii);
  bindedPrintCoordinates();

})()