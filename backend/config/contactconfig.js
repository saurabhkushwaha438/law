import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });


const transporter = nodemailer.createTransport({
    
    host: `${process.env.HOST_CON}`,
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.USER}`,
        pass: `${process.env.PASS}`
    },
  });

  export default transporter;