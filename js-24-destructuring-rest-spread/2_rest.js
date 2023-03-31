function multiply(multiplyer, ...theArgs) {

    return theArgs.map((val, idx) => {

        return val * multiplyer
    })
}

let nums = [1, 2, 3];
let ans = multiply(2, 3, 4, 5, 6)
console.log(ans);