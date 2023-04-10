async function f() {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(5);
        }, 3000);
    });

    let result = await promise;

    return result;
}

f()
    .then(result => {
        console.log(result);
    });