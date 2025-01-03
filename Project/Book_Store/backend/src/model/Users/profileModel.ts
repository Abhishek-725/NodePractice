import mongoose, { Model } from 'mongoose';
import { IUserProfile } from '../../interfaces/Users/ProfileInterface';

const ProfileSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required : true
    },
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
    profile_pic : {
        type : String
    },
    city_id :{
        type : Number,
        required : true,
        validate :{
            validator (value : string) {
                const mobileRegex = /^[0-9]+$/;
                return mobileRegex.test(value.toString());
            },
            message: (props:{ value: string }) => `${props.value} is invalid city_id.`
        }
    },
    district_id :{
        type : Number,
        required : true,
        validate :{
            validator (value : string) {
                const mobileRegex = /^[0-9]+$/;
                return mobileRegex.test(value.toString());
            },
            message: (props:{ value: string }) => `${props.value} is invalid district_id`
        }
    },
    state_id :{
        type : Number,
        required : true,
        validate :{
            validator (value : string) {
                const mobileRegex = /^[0-9]+$/;
                return mobileRegex.test(value.toString());
            },
            message: (props:{ value: string }) => `${props.value} is invalid state_id.`
        }
    },
});

const UsersProfile: Model<IUserProfile> = mongoose.model<IUserProfile>('UserProfile', ProfileSchema);

export default UsersProfile;