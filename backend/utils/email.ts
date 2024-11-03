import nodemailer from 'nodemailer';

interface EmailOptions {
    email: string;
    subject: string;
    html: string;
    
}

export const sendEmail = async (options: EmailOptions) => {
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    const mailOptions = {
        from: `"GAUTAM JAIN" <gautamjain09687@gmail.com>`,
        to: options.email,
        subject: options.subject,
        html: options.html
    };

    await transporter.sendMail(mailOptions);


}