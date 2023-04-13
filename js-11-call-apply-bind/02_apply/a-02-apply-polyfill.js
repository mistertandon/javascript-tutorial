(function () {
  Function.prototype.apply = function (context, args) {
    console.log("Function this context:    \n", this);
    console.log("\nPassed temporary context: \n", context);

    context = context || window;

    const key = Symbol();

    context[key] = this;

    const result = context[key](...args);

    delete context[key];

    return result;
  };

  function getSum(c, d) {
    let sum = 0;

    sum = this.addend_i + this.addend_ii + c + d;

    return sum;
  }

  let addendParameters = {
    addend_i: 4,
    addend_ii: 5,
  };

  let sumResult = getSum.apply(addendParameters, [6, 7]);
  console.log(sumResult);
})(document, window);
