require('custom-env').env(true);
const express = require('express');
require('./cluster');
require('../db/dbConnection');
const indexRoutes = require('../Routes/indexRoutes');
const app = require('../app');
const globalErrorHandler = require('../controller/globalErrorHandler');


app.use(express.json({limit : '50mb'}));
app.use(express.urlencoded({extended : false, limit : '50mb'}));

app.use('/api',indexRoutes);
app.use('*',(req,res,next) => {
    res.status(400).json({message : `Url not found. ${req.originalUrl}`})
});
app.use(globalErrorHandler);


