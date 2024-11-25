"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('custom-env').env(true);
const express_1 = __importDefault(require("express"));
require("./cluster");
require("../db/dbConnection");
const indexRoutes_1 = __importDefault(require("../Routes/indexRoutes"));
const app_1 = __importDefault(require("../app"));
const globalErrorHandler_1 = __importDefault(require("../controller/globalErrorHandler"));
app_1.default.use(express_1.default.json({ limit: '50mb' }));
app_1.default.use(express_1.default.urlencoded({ extended: false, limit: '50mb' }));
app_1.default.use('/api', indexRoutes_1.default);
app_1.default.use('*', (req, res, next) => {
    res.status(400).json({ message: `Url not found. ${req.originalUrl}` });
});
app_1.default.use(globalErrorHandler_1.default);
