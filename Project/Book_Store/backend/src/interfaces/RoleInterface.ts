import { Document } from 'mongoose';

export interface IRole extends Document {
  name: 'ADMIN' | 'USER' | 'REVIEWER';
  description?: string;
}
