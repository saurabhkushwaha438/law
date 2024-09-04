// blogModel.js
import mongoose from 'mongoose';

const { Schema ,model} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images:  {
            type: String,
            required:true
        },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('Blog', blogSchema);
