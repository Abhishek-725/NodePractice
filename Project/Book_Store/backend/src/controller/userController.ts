import { Request, Response, NextFunction } from 'express';
import User from '../model/Users';
import ResponseHandler from '../utils/ResponseHandler';
import errorWrapper from '../utils/errorWrapper';
import userServices from '../services/userServices';
import AppError from '../utils/AppError';

interface UserFilter {
  email?: string;
}
const createUser = errorWrapper(async (req : Request,res : Response,next : NextFunction) => {
    const result = await userServices.craeteUser(req);
    res
      .status(201)
      .json({
        status: 201,
        message: "User created successfully.",
        data: result,
      });
}
);

const getUsers = errorWrapper(async (req : Request, res : Response, next : NextFunction) => {
    const {email} : UserFilter = req.query;
    if (!email) return next(new AppError('Please provide email_id',400));
    
    const { count, data } = await userServices.getUsers(email);
    ResponseHandler.success(res,data,200);
    // return res.status(200).json({
    //     status: 200,
    //     count: count,
    //     data: data,
    // });
});

export default {
  createUser,
  getUsers
}