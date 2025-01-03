"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoleSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: ['ADMIN', 'USER', 'REVIEWER'],
        required: true
    },
    description: {
        type: String,
        default: 'No description available'
    },
});
const Role = mongoose_1.default.model('Role', RoleSchema);
exports.default = Role;
