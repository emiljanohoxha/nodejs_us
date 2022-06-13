

const fs = require('fs');

let categoriesArr = fs.readFileSync('./categories.json');
let categories = JSON.parse(categoriesArr);
// console.log(categories);


    module.exports.categories = categories;