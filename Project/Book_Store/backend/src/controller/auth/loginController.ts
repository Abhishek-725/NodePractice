import User from "../../model/Users/Users";
import AppError from "../../utils/AppError";
import errorWrapper from "../../utils/errorWrapper";
import {Request, Response, NextFunction} from 'express';


const loginUser = errorWrapper(async (req : Request,res : Response,next : NextFunction) => {
    const {password, mobile} = req.body;
    if(!mobile || !password) return next(new AppError('Insufficient data.',400));
    const userData = await User.findOne({
        
    })
});

const registerUser = errorWrapper(async (req : Request,res : Response,next : NextFunction) => {
    const {first_name, last_name, email, mobile, password} = req.body;
    if(!mobile || !password) return next(new AppError('Insufficient data.',400));
    const userData = await User.findOne({
        
    })
});

export default {
    loginUser,
    registerUser
}