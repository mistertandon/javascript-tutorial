/**
 * var input = [[[[1, 2]], [[[[3]], [4], [5]]], [[[[[6, 7]]]]]]];
 * 
 * Expected output
 * 
 * var output = [1, 2, 3, 4, 5, 6, 7];
 * 
 * 
 */

var input = [[[[1, 2]], [[[[3]], [4], [5]]], [[[[[6, 7]]]]]]];
var flattenArray = [];

function getFlattenArray(refArray) {

    for (let i = 0; i < refArray.length; i++) {

        if (typeof refArray[i] === 'object' && Array.isArray(refArray[i])) {

            getFlattenArray(refArray[i]);


        } else if (typeof refArray[i] === 'number') {

            flattenArray.push(refArray[i]);
        }

    }

    return flattenArray;
}

var ans = getFlattenArray(input);

console.log(ans);

