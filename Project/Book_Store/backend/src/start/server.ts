require('custom-env').env(true);
import express, { Request, Response, NextFunction } from 'express';
import './cluster';
import '../db/dbConnection';
import indexRoutes from '../Routes/indexRoutes';
import app from '../app';
import globalErrorHandler from '../controller/globalErrorHandler';


app.use(express.json({limit : '50mb'}));
app.use(express.urlencoded({extended : false, limit : '50mb'}));

app.use('/api',indexRoutes);
app.use('*',(req : Request,res : Response,next : NextFunction) => {
    res.status(400).json({message : `Url not found. ${req.originalUrl}`})
});
app.use(globalErrorHandler);


