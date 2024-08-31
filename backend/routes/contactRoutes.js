import express from 'express';
import { send } from '../controller/contactController.js';
const router = express.Router();

router.post('/',send);

export default router;