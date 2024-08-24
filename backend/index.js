import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/dbconfig.js";
dotenv.config();

const app =express();
const port = process.env.PORT;

app.use(cors());
connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });