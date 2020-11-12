(function () {
    try {
        throw new Error();
    } catch (x) {

        var x = 1, y = 2;
        console.log('Internal x: ', x);
    }

    console.log('External x: ', x);
    console.log('External y: ', y);
})();