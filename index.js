
/**
 * Importing functions :
 *      -async function to retrieve data from json file
 *      -concat function to concatenate arrays
 *      -sum function to get sum of arrays
 */

const { categoriesArr } = require('./app/index')
const { concat } = require('./app/concat')
const { sum } = require('./app/calc')


/**
 *     Getting the output of functions
 */

categoriesArr().then((data) => {
    console.log(`Sum of json file array is : ${sum(data)}`);
    console.log(`Sum of the concatenated arrays is: ${sum(concat(data))}`);

})