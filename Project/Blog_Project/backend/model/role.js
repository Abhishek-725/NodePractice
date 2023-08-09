const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Roles extends Model{

} 

Roles.init({
    roleId: {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    roleName : {
        type :DataTypes.STRING,
        allowNull : false
    }
},{
    modelName : 'roles',
    sequelize,
    timestamps:false
})

module.exports = Roles;
