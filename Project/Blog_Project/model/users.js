const sequelize = require('./index');
const {Model, DataTypes} = require('sequelize');


class User extends Model{

}

User.init({
    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    firstName :{
        type : DataTypes.STRING,
        allowNull : false
    },
    lastName :{
        type : DataTypes.STRING,
        allowNull : false
    },
    userName :{
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    email :{
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password :{
        type : DataTypes.STRING,
        allowNull : false
    },
    role : {
        type : DataTypes.INTEGER,
        references : {
            key : id,
            model : role
        }
    }
})

