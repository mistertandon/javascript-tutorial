var counter = 0
function methodCalled() {

    console.log(`${counter++}: methodCalled`);
}

function magicFunction(normalFunc, delay) {

    var timer;

    return function() {

        var context = this;
        var args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function() {

            normalFunc.apply(context, args);
        }, delay)
    }
}

var betterFunc = magicFunction(methodCalled, 1000);
for (let i = 0; i < 10; i++) {

    betterFunc();
}