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


app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:5173'  // Frontend URL
}));
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