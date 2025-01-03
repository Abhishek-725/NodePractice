import Role from '../model/Role';
import UsersProfile from '../model/Users/profileModel';
import User from '../model/Users/Users';
import AppError from '../utils/AppError';
import {Request, Response, NextFunction} from 'express';

interface UserFilter {
    email?: string;
}

const craeteUser = async (req :Request ) => {
    const {email, role, password, mobile, first_name, last_name, profile_pic, state_id, district_id, city_id} = req.body;
    const checkmail = await User.findOne({
        email : email
    });
    if (checkmail) {
        // console.log("User email exists");
        throw new AppError('E-mail alredy exists.',400);
    }
    const defaultRole = await Role.findOne({ name: 'USER' });
    if (!defaultRole)  throw new AppError('Default role not found.', 500);
    const result = await User.create({
        email,
        mobile,
        role : role || defaultRole?._id || null,
        password
    });
    const profileData = await UsersProfile.create({
        user_id : result._id,
        first_name,
        last_name,
        state_id,
        district_id,
        city_id
    });
    const [user, profile] = await Promise.all([result.save(), profileData.save()])
    return {user, profile};
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