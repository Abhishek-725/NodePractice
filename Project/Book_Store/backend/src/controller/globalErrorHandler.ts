import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
    statusCode?: number;
}


export default (err : AppError, req : Request, res : Response, next : NextFunction) =>{
   let statusCode = err.statusCode || 500;
   let msg = err.message || 'Something went wrong';
   if (err) {
    return res.status(statusCode).json({
        status : statusCode,
        error : msg
    });
   }
}