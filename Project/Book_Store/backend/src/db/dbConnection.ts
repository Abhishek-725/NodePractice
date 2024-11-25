import mongoose from 'mongoose';
const cluster = require('cluster');

mongoose.connect('mongodb://0.0.0.0:27017/book_store')
.then(( ) => {
    console.log('DataBase connection Successful');
})
.catch((error) => {
    console.log('DataBase connection error : ',error);
});