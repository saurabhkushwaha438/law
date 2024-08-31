import transporter from "../config/contactconfig.js";

export const send=async(req,res)=>{
    const { name, email, subject, message } = req.body;

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: "legal.eye.serv@gmail.com", // receiver email address
      subject: subject, // Subject line
      text: message, // plain text body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
}