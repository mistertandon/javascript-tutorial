var b = 1;
function outer() {
    var b = 2
    function inner() {
        
        b++;
        console.log(b); // NaN

        var b = 3;
        console.log(b) // 3
    }
    inner();
}
outer();