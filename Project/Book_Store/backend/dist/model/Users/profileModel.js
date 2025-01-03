"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return value.length >= 2 && value.length <= 30;
            },
            message: 'Last name must contain 2 to 30 characters.',
        }
    },
    profile_pic: {
        type: String
    },
    city_id: {
        type: Number,
        required: true,
        validate: {
            validator(value) {
                const mobileRegex = /^[0-9]{6}$/;
                return mobileRegex.test(value.toString());
            },
            message: (props) => `${props.value} is invalid city_id.`
        }
    },
    district_id: {
        type: Number,
        required: true,
        validate: {
            validator(value) {
                const mobileRegex = /^[0-9]{6}$/;
                return mobileRegex.test(value.toString());
            },
            message: (props) => `${props.value} is invalid district_id`
        }
    },
    state_id: {
        type: Number,
        required: true,
        validate: {
            validator(value) {
                const mobileRegex = /^[0-9]{6}$/;
                return mobileRegex.test(value.toString());
            },
            message: (props) => `${props.value} is invalid state_id.`
        }
    },
});
const UsersProfile = mongoose.model('UserProfile', ProfileSchema);
exports.default = UsersProfile;
