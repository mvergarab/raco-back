import nodemailer from 'nodemailer';

async function sendEmail({ to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, 
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_USER,
    subject: subject,
    text: text,
    html: html,
  });

  console.log('Message sent: %s', info.messageId);
}

export { sendEmail };
