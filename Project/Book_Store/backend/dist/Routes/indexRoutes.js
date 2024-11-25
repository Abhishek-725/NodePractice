"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
router.use('/auth', authRoutes_1.default);
router.use('/users', usersRoutes_1.default);
exports.default = router;
