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
})()