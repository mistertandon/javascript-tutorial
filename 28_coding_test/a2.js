/**
 * sum(2,3) should return 5
 * OR
 * sum(2)(3)(4) should return 9
 * OR
 * sum(2)(4,5) should return 11
 */

const calcSum = (...fns_iii) => {
  var sum_iii = fns_iii.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  {
    /**
     * TODO: comment section is pending
     */
  }
  return (...fns_ii) => {
    var sum_ii = fns_ii.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, sum_iii);

    return (...fns_i) => {
      var sum_i = fns_i.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, sum_ii);

      return sum_i;
    };
  };
};

const optimizedCalcSum =
  (...fns_iii) =>
  (...fns_ii) =>
  (...fns_i) => {
    var operandList = fns_iii.concat(fns_ii, fns_i);

    return operandList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };
optimizedCalcSum(2)(3)(4);
