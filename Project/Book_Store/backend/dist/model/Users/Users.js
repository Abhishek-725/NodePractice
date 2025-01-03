"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    mobile: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator(value) {
                const mobileRegex = /^[0-9]{10}$/;
                return mobileRegex.test(value.toString());
            },
            message: (props) => `${props.value} is invalid mobile number.`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator(value) {
                const emailRegex = /^\S+@\S+\.\S+$/;
                return emailRegex.test(value);
            },
            message: (props) => `${props.value} is invalid email.`
        }
    },
    role: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Roles',
        default: '67614fac9b2091aa5e28d663'
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    is_test_user: {
        type: Boolean,
        default: false,
    },
    block_user: {
        type: Boolean,
        default: false,
    },
    is_delete: {
        type: Boolean,
        default: false,
    },
    creation_date: {
        type: Date,
        default: Date.now,
    }
});
const User = mongoose_1.default.model('Users', UserSchema);
exports.default = User;
