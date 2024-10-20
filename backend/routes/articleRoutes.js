import express from 'express';
import multer from 'multer';
import { getArticles, createArticle } from '../controller/articleController.js';
import cloudinary from '../config/cloudinaryConfig.js';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'pdfs');  
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);  
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', getArticles);

router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    console.log('File uploaded:', req.file);

    const result = await cloudinary.uploader.upload(req.file.path, { 
      resource_type: 'raw',
      //format: 'pdf',
     // type: 'authenticated',
    //  transformation: [{ flags: 'attachment' }]
    });
    console.log('Cloudinary upload result:', result);

    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.log('Error deleting file:', err);
        return res.status(500).json({ message: 'Error deleting local file' });
      } else {
        console.log('Deleted local file:', req.file.path);
      }
    });

    req.body.pdf = result.secure_url;
    await createArticle(req, res);

  } catch (error) {
    console.error('Error during article creation:', error);
    res.status(500).json({ message: 'Server error' });
  }
});  

export default router;