/**
 * Block 1
 */
console.log(a()); // 3

function a() {

    var b = function () {

        return 3;
    };

    return b();

    var b = function () {

        return 8;
    };
}

/**
 * Block 2
 */
console.log(a()); // 8
function a() {

    function b() {
        return 3;
    }

    return b();

    function b() {

        return 8;
    }
}