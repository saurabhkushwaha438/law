import nodemailer from 'nodemailer';

import dotenv from 'dotenv'
dotenv.config();


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