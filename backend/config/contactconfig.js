import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: 'destinee.rogahn7@ethereal.email',
        pass: '8vmdbxXaW2TA8Jan1D'
    },
  });

  export default transporter;