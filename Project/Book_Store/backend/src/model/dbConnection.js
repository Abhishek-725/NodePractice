const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/vidly')
    .then(( ) => {
        console.log('DataBase connection Successful');
    })
    .catch((error) => {
        console.log('DataBase connection error : ',error);
    });