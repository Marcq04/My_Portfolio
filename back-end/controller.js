const transporter = require('./email'); // Import transporter from model

const sendEmail = async (req, res) => {
    try {
        const { name, email: senderEmail, message } = req.body; // Avoid variable name conflicts

        const mailOptions = {
            from: `"${name}" <${senderEmail}>`, // Ensure sender's email is formatted correctly
            to: process.env.EMAIL_USER, // Send email to your personal email
            subject: 'New Message from Your Portfolio',
            text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

module.exports = { sendEmail };
