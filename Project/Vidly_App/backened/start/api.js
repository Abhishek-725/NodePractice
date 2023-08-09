const app = require('../app');
const morgan = require('morgan');
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}

// Routes
const movieRoutes = require('../routes/moviesRoute');
const userRoutes = require('../routes/userRoute');
const moviesRentRoutes = require('../routes/moviesRented');

const express = require('express');
const path = require('path');
const CustomerError = require('../utils/CustomError');
const errorhandler = require('../controller/errorhandler');



app.use(express.static(path.join(__dirname,'public')));
app.use('/public',express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use('/vidly/movies',movieRoutes); // Movies Route
app.use('/vidly/users',userRoutes); // Users Route
app.use('/vidly/moviesRented',moviesRentRoutes); // Movies Rented

// if url doesn't match
app.all('*',async (req,res,next) => {
    let err = new CustomerError(`Ulr : ${req.originalUrl} not found`,404);
    next(err);
})

// Global Error handler
app.use(errorhandler);