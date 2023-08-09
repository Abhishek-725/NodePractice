const {Sequelize} = require('sequelize');

const dbConnection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
    host :'localhost',
    dialect :'postgres',
    // logging : false
});

dbConnection.authenticate()
    .then(() => console.log("DataBase Connection is successful"))
    .catch((error) => {
        console.log("DataBase Error : ",error);
    });

module.exports = dbConnection;


dbConnection.sync({alter : true})
    .then(() => console.log("DataBase sync successfully"))
    .catch((err) => console.log("DataBase sync error ",err));