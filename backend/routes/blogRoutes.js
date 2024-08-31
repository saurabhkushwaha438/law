import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog } from '../controller/blogController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/blogs/' });

router.get('/', getBlogs);
router.post('/', upload.array('images', 5), createBlog);

export default router;
