import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog } from '../controller/blogController.js';

const router = express.Router();
const upload = multer({ dest: 'images' });

router.get('/', getBlogs);
router.post('/', upload.single('images'), createBlog);

export default router;
