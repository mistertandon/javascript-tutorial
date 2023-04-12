(function () {
  Function.prototype.call = function (context, ...args) {
    console.log("function this context:    \n", this);
    console.log("\npassed temporary context: \n", context);

    context = context || window;

    const key = Symbol();
    context[key] = this;

    const result = context[key](...args);
    delete context[key];

    return result;
  };

  function getSum(c) {
    let sum = 0;

    sum = this.addend_i + this.addend_ii + c;

    return sum;
  }

  var addendParameters = {
    addend_i: 4,
    addend_ii: 6,
  };

  let result = getSum.call(addendParameters, 5);
  console.log("\n\nresult:", result);
})(document, window);
