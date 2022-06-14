/**
 *     
 * * @param {*} arr 
 *    @returns function to get sum of arrays with reduce method 
 */

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    })
}


module.exports.sum = sum