(function blockScopeExample() {

    for (var i = 0; i < 5; i++) {

        setTimeout(function logValue() {
            console.log(i); // 5, 5, 5, 5, 5
        }, 100);
    }

})();