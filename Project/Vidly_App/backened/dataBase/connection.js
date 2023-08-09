const {Sequelize} = require('sequelize');

let sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,{
        host:'localhost',
        dialect : 'postgres',
        logging : false
    }
);

try {
    sequelize.authenticate();
    console.log('DataBase connection successful.');
  
} catch (error) {
    console.log('DataBase connection fail : ',error);
}

module.exports = sequelize;