(function () {
  Function.prototype.bind = function (context,  args1) {
    console.log("Function this context:    \n", this);
    console.log("\nPassed context: \n", context);
    const fn = this;
    context = context || window;

    return function (args2) {
      return fn.apply(context, [...args1, ...args2]);
    };
  };

  function getSum() {
    let sum = 0;

    sum = this.addend_i + this.addend_ii;

    for (let i = 0; i < arguments.length; i++) {
      sum += parseInt(arguments[i]);
    }

    return sum;
  }

  let addendParameters = {
    addend_i: 1,
    addend_ii: 2,
  };

  let getSumBind = getSum.bind(addendParameters, [3, 4]);
  console.log(getSumBind([5, 6]));
})(document, window);
