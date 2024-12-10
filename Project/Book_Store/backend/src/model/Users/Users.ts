import mongoose from 'mongoose';
import Role from '../Role';


const UserSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role', 
        default: async function () {
            const defaultRole = await Role.findOne({ name: 'USER' });
            return defaultRole ? defaultRole._id : null;
        }
    },
    password : {
        type: String,
        required: true,
    },
    token : {
        type : String
    },
    is_test_user : {
        type: Boolean,
        default: false,
    },
    block_user : {
        type: Boolean,
        default: false,
    },
    creation_date : {
        type: Date, 
        default: Date.now,
    }
});

const User = mongoose.model('Users',UserSchema);

export default User;