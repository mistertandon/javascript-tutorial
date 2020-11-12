var x = 21;
var girl = function () {

    console.log(x); // undefined
    var x = 20;
};
girl();