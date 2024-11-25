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
const Users_1 = __importDefault(require("../model/Users"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const craeteUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email } = req.body;
    const checkmail = yield Users_1.default.findOne({
        email: email
    });
    if (checkmail) {
        console.log("User email exists");
        throw new AppError_1.default('E-mail alredy exists.', 400);
    }
    const result = yield Users_1.default.create({
        first_name,
        last_name,
        email,
    });
    return yield result.save();
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
