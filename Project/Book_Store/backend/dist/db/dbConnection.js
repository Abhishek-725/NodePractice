"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cluster = require('cluster');
mongoose_1.default.connect('mongodb://0.0.0.0:27017/book_store')
    .then(() => {
    console.log('DataBase connection Successful');
})
    .catch((error) => {
    console.log('DataBase connection error : ', error);
});
