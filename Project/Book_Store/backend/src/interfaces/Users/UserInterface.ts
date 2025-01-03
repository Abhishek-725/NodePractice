import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  mobile: number;
  email: string;
  role: Types.ObjectId | string | null;
  password: string;
  token?: string;
  is_test_user?: boolean;
  block_user?: boolean;
  is_delete?: boolean;
  creation_date?: Date;
}
