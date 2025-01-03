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
const Users_1 = __importDefault(require("../../model/Users/Users"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const errorWrapper_1 = __importDefault(require("../../utils/errorWrapper"));
const loginUser = (0, errorWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, mobile } = req.body;
    if (!mobile || !password)
        return next(new AppError_1.default('Insufficient data.', 400));
    const userData = yield Users_1.default.findOne({});
}));
const registerUser = (0, errorWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email, mobile, password } = req.body;
    if (!mobile || !password)
        return next(new AppError_1.default('Insufficient data.', 400));
    const userData = yield Users_1.default.findOne({});
}));
exports.default = {
    loginUser,
    registerUser
};
