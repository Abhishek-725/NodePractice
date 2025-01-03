import { Document, Types } from 'mongoose';

export interface IUserProfile extends Document {
  user_id: Types.ObjectId;
  first_name: string;
  last_name: string;
  profile_pic?: string;
  city_id: number;
  district_id: number;
  state_id: number;
}
