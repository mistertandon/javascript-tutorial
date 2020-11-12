(function () {
    try {
        throw new Error();
    } catch (x) {

        var x = 1, y = 2;
        console.log('Internal x: ', x); // Internal x:  1
    }

    console.log('External x: ', x); // External x:  undefined
    console.log('External y: ', y); // External y:  2
})();