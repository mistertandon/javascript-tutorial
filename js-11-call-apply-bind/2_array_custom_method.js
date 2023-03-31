Array.prototype.customMapFunction = function (funcRef) {

    var newArr = [];
    for(let i=0; i<this.length; i++){

        newArr[i] = funcRef(5, this[i]);
    }

    return newArr;
}

function doMultiplication(param_a, param_b) {

    return param_a * param_b
}

let nums = [1, 2, 3];

let ans = nums.customMapFunction(doMultiplication)
console.log(ans);