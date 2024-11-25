const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : true,
    },
    last_name :{
        type : String,
        required : true,
        validate : {
            validator (value : string) {
                return value.length >= 2 && value.length <= 30
            },
            message : 'Last name must contain 2 to 30 characters.',
        }
    },
    email :{
        type : String,
        required : true,
        unique : true,
        validate :{
            validator (value : string) {
                const emailRegex = /^\S+@\S+\.\S+$/;
                return emailRegex.test(value);
            },
            message: (props:{ value: string }) => `${props.value} is invalid email.`
        }
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER','REVIEWER'],
        default: 'USER',
    },
    mobile :{
        type : Number,
        required : true,
        unique : true,
        validate :{
            validator (value : string) {
                const mobileRegex = /^[0-9]{10}$/;
                return mobileRegex.test(value.toString());
            },
            message: (props:{ value: string }) => `${props.value} is invalid mobile number.`
        }
    },
    password : {
        type : String
    }
});

const User = mongoose.model('Users',UserSchema);

export default User;