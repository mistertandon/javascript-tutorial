
var a = 10;
var x = function () {
    var a = 25;
    console.log(a)
}
x();

/**
 * {Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c) }
 */
function curry(f) {

    return function (a) {

        return function (b) {

            return f(a, b);
        }
    }
}

function sum(a, b) {
    console.log(a + b)
}

let curriedSum = curry(sum)
curriedSum(1)(2);