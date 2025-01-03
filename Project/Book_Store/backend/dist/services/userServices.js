"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("../model/Role"));
const profileModel_1 = __importDefault(require("../model/Users/profileModel"));
const Users_1 = __importDefault(require("../model/Users/Users"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const craeteUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, role, password, mobile, first_name, last_name, profile_pic, state_id, district_id, city_id } = req.body;
    const checkmail = yield Users_1.default.findOne({
        email: email
    });
    if (checkmail) {
        // console.log("User email exists");
        throw new AppError_1.default('E-mail alredy exists.', 400);
    }
    const defaultRole = yield Role_1.default.findOne({ name: 'USER' });
    if (!defaultRole)
        throw new AppError_1.default('Default role not found.', 500);
    const result = yield Users_1.default.create({
        email,
        mobile,
        role: role || (defaultRole === null || defaultRole === void 0 ? void 0 : defaultRole._id) || null,
        password
    });
    try {
        const profileData = yield profileModel_1.default.create({
            user_id: result._id,
            first_name,
            last_name,
            state_id,
            district_id,
            city_id
        });
        return { user: result, profile: profileData };
    }
    catch (error) {
        yield Users_1.default.deleteOne({ _id: result._id });
        throw new AppError_1.default((error === null || error === void 0 ? void 0 : error.message) || 'Fail to insert data.', 400);
    }
});
const getUsers = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userFilter = {};
    if (email) {
        userFilter['email'] = email;
    }
    const aggregateQuery = [
        { $match: userFilter },
        { $group: { _id: null, count: { $sum: 1 }, data: { $push: '$$ROOT' } } }
    ];
    const result = yield Users_1.default.aggregate(aggregateQuery);
    if (!result || result.length === 0) {
        throw new AppError_1.default('Data not found.', 400);
    }
    return result[0];
});
exports.default = {
    craeteUser,
    getUsers
};
