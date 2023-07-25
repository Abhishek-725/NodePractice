const app = require('../app');
const movieRoutes = require('../routes/moviesRoute');
const userRoutes = require('../routes/userRoute');
const express = require('express');
const path = require('path');
const bodyParser =require('body-parser')
const controller = require('../controller/userController');
const userAuth = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');

app.use(express.static(path.join(__dirname,'public')));
app.use('/public',express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use('/vidly/movies',movieRoutes);
app.use('/vidly/users',userRoutes);


app.use(async(err,req,res,next) => {
    if (err) {
        res.send(err.message);
        console.log('Error handler ',err);
        // process.exit(1);
    }
});