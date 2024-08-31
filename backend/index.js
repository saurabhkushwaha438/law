import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import blogRoutes from './routes/blogRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import contactRoutes from './routes/contactRoutes.js'
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/articles/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
connectDB();

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use upload middleware in your routes
app.use('/api/blogs', blogRoutes);
app.use('/api/articles', (req, res, next) => {
  upload.single('pdf')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: 'File upload error', details: err.message });
    } else if (err) {
      return res.status(500).json({ error: 'Unknown error', details: err.message });
    }
    next();
  });
}, articleRoutes);
app.use('/api/contact',contactRoutes);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('An error occurred');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});