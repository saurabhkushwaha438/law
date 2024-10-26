import express from 'express';
import multer from 'multer';
import bucket from '../config/firebaseConfig.js';  // Import your Firebase configuration
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { getArticles, createArticle } from '../controller/articleController.js';

const router = express.Router();
const upload = multer({ dest: 'pdfs/' }); // Temporary local storage



router.get('/', getArticles);

router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Generate unique file name
    const fileName = `${uuidv4()}_${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);

    // Read file and upload to Firebase Storage
    await fileUpload.save(fs.readFileSync(req.file.path), {
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    // Get public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
    req.body.pdf = publicUrl;

    // Delete the local file after upload
    fs.unlinkSync(req.file.path);

    // Create article with the uploaded file URL
    await createArticle(req, res);
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
