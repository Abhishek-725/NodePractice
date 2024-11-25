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
const ResponseHandler_1 = __importDefault(require("../utils/ResponseHandler"));
const errorWrapper_1 = __importDefault(require("../utils/errorWrapper"));
const userServices_1 = __importDefault(require("../services/userServices"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const createUser = (0, errorWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userServices_1.default.craeteUser(req);
    res
        .status(201)
        .json({
        status: 201,
        message: "User created successfully.",
        data: result,
    });
}));
const getUsers = (0, errorWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    if (!email)
        return next(new AppError_1.default('Please provide email_id', 400));
    const { count, data } = yield userServices_1.default.getUsers(email);
    ResponseHandler_1.default.success(res, data, 200);
    // return res.status(200).json({
    //     status: 200,
    //     count: count,
    //     data: data,
    // });
}));
exports.default = {
    createUser,
    getUsers
};
