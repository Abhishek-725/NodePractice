const fs = require('fs');
const path = require('path');
const db = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf !== 0 && file !== basename && file.slice(-3) === '.js')
}).forEach((file) => {
    const model = require(path.join(__dirname,file));
    db[model.name] = model;
});
console.log('db : ',db);