"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const loginController_1 = __importDefault(require("../controller/auth/loginController"));
router
    .route('/login')
    .post(loginController_1.default.loginUser);
exports.default = router;
