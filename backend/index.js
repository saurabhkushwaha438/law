import express from "express";
import pkg from 'express-openid-connect';
const { auth, requiresAuth } = pkg;
import config from "./config/authconfig.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
connectDB();

app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/login', (req, res) => {
  res.oidc.login({ returnTo: '/' });
});

app.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: '/' });
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('An error occurred');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});