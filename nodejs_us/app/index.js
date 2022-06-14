
const fsPromises = require('fs').promises
const path = require('path');

/**
 * 
 * @returns async function te read json file 
 */
const categoriesArr = async() => {
    try {
      const data = await fsPromises.readFile(path.join(__dirname,'../jsonfile','categories.json'),'utf8');
      const dataJson = JSON.parse(data);

        return dataJson;
    }catch (err) {
        return console.error(err);
    }
}


module.exports.categoriesArr= categoriesArr;
