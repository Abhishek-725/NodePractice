import mongoose, {Model} from 'mongoose';
import { IRole } from '../interfaces/RoleInterface';

const RoleSchema = new mongoose.Schema({
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

const Role: Model<IRole> = mongoose.model<IRole>('Roles', RoleSchema);

export default Role;
