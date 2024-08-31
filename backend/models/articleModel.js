// articleModel.js
import mongoose from 'mongoose';

const { Schema , model } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    pdfUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('Article', articleSchema);
