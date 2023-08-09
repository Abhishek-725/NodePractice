const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase/connection');
const Movies = require('./movies');
const Users = require('./users');

class MovieRented extends Model {

}

MovieRented.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    movieId : {
        type : DataTypes.INTEGER,
        allowNull:false,
        references : {
            key : 'movieId',
            model : Movies
        }
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            key : 'id',
            model : Users
        }
    },
    rentDate : {
        type : DataTypes.DATE,
        defaultValue : DataTypes.NOW,
    },
    returnDate : {
        type : DataTypes.DATE,
        allowNull : false
    },
    status : {
        type : DataTypes.STRING,
        defaultValue : "Rented"
    }
},{
    modelName : 'movieRents',
    sequelize,
    timestamps : false
});

module.exports = MovieRented;