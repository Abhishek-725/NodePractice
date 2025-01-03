import mongoose, {Document, Model} from 'mongoose';
import { IUser } from '../../interfaces/Users/UserInterface';

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
        ref: 'Roles', 
        default: '67614fac9b2091aa5e28d663'
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
    is_delete : {
        type: Boolean,
        default: false,
    },
    creation_date : {
        type: Date, 
        default: Date.now,
    }
});

const User: Model<IUser> = mongoose.model<IUser>('Users', UserSchema);

export default User;