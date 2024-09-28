import express from 'express';
import multer from 'multer';
import { getArticles,createArticle } from '../controller/articleController.js';

// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'pdfs');  // Folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);  // Append timestamp to avoid name conflicts
  }
});

const upload = multer({ storage });  // Using the defined storage

const router = express.Router();

router.get('/', getArticles);
router.post('/', upload.single('pdf'), createArticle);  // Changed 'images' to 'image' to match your input name in form

export default router;
