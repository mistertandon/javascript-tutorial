var obj = {
    a: 1,
    b: {
        c: 2
    },
    d: {
        e: 3,
        f: 4,
    },
    g: null
};

function getDeepCopy(refObj) {

    var copiedObj = {};
    for (key in refObj) {

        if (refObj[key] !== null && typeof refObj[key] === 'object') {

            copiedObj[key] = getDeepCopy(refObj[key]);
        } else {

            copiedObj[key] = refObj[key];
        }
    }

    return copiedObj;
}

var copiedObj = getDeepCopy(obj);

copiedObj.b.c = 20;

console.log('Original Object: ', obj);
console.log('Copied Object: ', copiedObj);

