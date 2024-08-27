// userModel.js
import mongoose from 'mongoose';

const { Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    auth0Id: {
        type: String,
        required: true,
        unique: true,
    },
    profileImage: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('User', userSchema);
