import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import blogRoutes from './routes/blogRoutes.js';
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
app.use("/images", express.static(path.join(__dirname, "/images")));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images");
  },
  filename: (req, file, callb) => {
    const extension = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `${uniqueSuffix}${extension}`;
    callb(null, filename);
  }
});

const upload = multer({ storage: storage });



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
connectDB();


// Use upload middleware in your routes
app.use('/api/blogs', blogRoutes);

app.use('/api/contact',contactRoutes);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('An error occurred');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});