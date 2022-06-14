const _ = require('lodash')
 
/**
 * 
 * @param {*} categoriesArr 
 * @returns concateneted array
 */

function concat(categoriesArr){
    return _.concat(categoriesArr,[1,2,3,4,4,4,4])
}

module.exports.concat = concat


