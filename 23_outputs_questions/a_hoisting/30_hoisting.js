(function blockScopeExample() {

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {
            console.log(i); //0 1 2 3 4
        }, 100);
    }
})();