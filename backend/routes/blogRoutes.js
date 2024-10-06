import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog } from '../controller/blogController.js';

// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');  // Folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);  // Append timestamp to avoid name conflicts
  }
});

const upload = multer({ storage });  // Using the defined storage

const router = express.Router();

router.get('/', getBlogs);
router.post('/', upload.single('images'), createBlog);  // Changed 'images' to 'image' to match your input name in form

export default router;
