import mongoose from 'mongoose';

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

const Role = mongoose.model('Role', RoleSchema);

export default Role;
