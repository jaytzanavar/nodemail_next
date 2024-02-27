const nodemailer = require('nodemailer');

export const transporter= nodemailer.createTransport({
    service:'Gmail',
    host: "smtp.gmail.com",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    }
})


export const mailOptions= {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_EMAIL_USERNAME
}