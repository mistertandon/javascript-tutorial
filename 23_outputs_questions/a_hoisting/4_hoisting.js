/**
 * Function expressions in JavaScript are not hoisted.
 */

functionExpression() // TypeError: functionExpression is not a function
const functionExpression = function () {

    console.log('Not Hoisted')
}