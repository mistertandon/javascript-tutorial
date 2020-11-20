var test = 1;

function functionHoisting() {

    console.log('Before update global variable: ', test); // function test() { }

    test = 10;

    console.log('After update global variable: ', test); // 10

    return;

    function test() { }
}

functionHoisting();

console.log(test); // 1