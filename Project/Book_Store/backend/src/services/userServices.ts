import User from '../model/Users';
import AppError from '../utils/AppError';
import {Request, Response, NextFunction} from 'express';

interface UserFilter {
    email?: string;
}

const craeteUser = async (req :Request ) => {
    const {first_name, last_name, email} = req.body;
    const checkmail = await User.findOne({
        email : email
    });
    if (checkmail) {
        console.log("User email exists");
        throw new AppError('E-mail alredy exists.',400);
    }
    const result = await User.create({
        first_name,
        last_name,
        email,
    });
    return await result.save();
}

const getUsers = async (email : string) => {
    const userFilter : UserFilter  = {};
    if (email) {
        userFilter['email'] = email
    }
    const aggregateQuery = [
        { $match: userFilter },
        { $group: { _id: null, count: { $sum: 1 }, data: { $push: '$$ROOT' } } }
    ];
    const result = await User.aggregate(aggregateQuery);
    if (!result || result.length === 0) {
        throw new AppError('Data not found.',400);
    }
    return result[0];
}
export default {
    craeteUser,
    getUsers
}