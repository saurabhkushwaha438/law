import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog } from '../controller/blogController.js';
import cloudinary from '../config/cloudinaryConfig.js';
import fs from 'fs';

// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');  // Folder to store images temporarily
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);  
  }
});

const upload = multer({ storage });  

const router = express.Router();

// Fetch all blogs
router.get('/', getBlogs);

// Create a new blog
router.post('/', upload.single('images'), async (req, res) => {
  try {
    // Ensure an image file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    console.log('File uploaded:', req.file);

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log('Cloudinary upload result:', result);

    // Delete local file after uploading to Cloudinary
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.log('Error deleting file:', err);
      } else {
        console.log('Deleted local file:', req.file.path);
      }
    });

    // Pass Cloudinary URL to the blog creation process
    req.body.imageUrl = result.secure_url;
    await createBlog(req, res);

  } catch (error) {
    console.error('Error during blog creation:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
