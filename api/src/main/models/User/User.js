import mongoose from 'mongoose';
import userModelUtils from './userModel.utils';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        index: { unique: true },
    },
    password: { type: String, required: true },
    countries: [{
        name: String,
        creationDate: { type: Date, default: Date.now },
    }],
});

userSchema.pre('save', userModelUtils.preSave);
userSchema.methods.comparePassword = userModelUtils.comparePassword;

export default mongoose.model('User', userSchema);
