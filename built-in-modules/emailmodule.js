const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vcart.e.store@gmail.com',
        pass: 'aong ugah ousx fyfg'
    }
});

// Setup email data with unicode symbols
let mailOptions = {
    from: '"VCART" <vcart.e.store@gmail.com>', // sender address
    to: 'waseemaziz106@gmail.com', // list of receivers
    subject: 'Welcome to VCART - Your New Destination for Hassle-free Shopping! ✔', // Subject line
    text: `Dear Customer,

Welcome to VCART, your one-stop destination for all your shopping needs! We are thrilled to have you join our community of savvy shoppers and tech enthusiasts.

At VCART, we believe in providing you with a seamless and enjoyable shopping experience. Whether you're looking for the latest gadgets, trendy fashion items, or everyday essentials, we've got you covered. With our wide range of products and user-friendly interface, finding what you need has never been easier.

Here's what you can expect from VCART:

1. **Huge Selection**: Explore thousands of products across various categories, from electronics and fashion to home decor and more.

2. **Great Deals**: Enjoy exclusive discounts and special offers on your favorite items, updated regularly to ensure you get the best deals.

3. **Fast and Secure Checkout**: Our streamlined checkout process ensures a hassle-free shopping experience, with secure payment options to protect your transactions.

4. **Personalized Recommendations**: Discover new products tailored to your preferences with our personalized recommendation engine, making shopping even more enjoyable.

5. **Exceptional Customer Support**: Our dedicated support team is here to assist you every step of the way. Have a question or need assistance? Don't hesitate to reach out to us!

To start shopping with VCART, simply log in to your account and browse our extensive catalog. If you have any feedback or suggestions, we'd love to hear from you. Your input helps us improve and provide you with an even better shopping experience.

Once again, welcome to VCART! We're excited to embark on this shopping journey with you.

Happy shopping!

Best regards,
Vcart Team Leader 
Waseem Aziz`, // plain text body
    // HTML version of the message
    html: `<p>Dear Ali Basra,</p>
    <p>Welcome to VCART, your one-stop destination for all your shopping needs! We are thrilled to have you join our community of savvy shoppers and tech enthusiasts.</p>
    <p>At VCART, we believe in providing you with a seamless and enjoyable shopping experience. Whether you're looking for the latest gadgets, trendy fashion items, or everyday essentials, we've got you covered. With our wide range of products and user-friendly interface, finding what you need has never been easier.</p>
    <p>Here's what you can expect from VCART:</p>
    <ol>
        <li><strong>Huge Selection:</strong> Explore thousands of products across various categories, from electronics and fashion to home decor and more.</li>
        <li><strong>Great Deals:</strong> Enjoy exclusive discounts and special offers on your favorite items, updated regularly to ensure you get the best deals.</li>
        <li><strong>Fast and Secure Checkout:</strong> Our streamlined checkout process ensures a hassle-free shopping experience, with secure payment options to protect your transactions.</li>
        <li><strong>Personalized Recommendations:</strong> Discover new products tailored to your preferences with our personalized recommendation engine, making shopping even more enjoyable.</li>
        <li><strong>Exceptional Customer Support:</strong> Our dedicated support team is here to assist you every step of the way. Have a question or need assistance? Don't hesitate to reach out to us!</li>
    </ol>
    <p>To start shopping with VCART, simply log in to your account and browse our extensive catalog. If you have any feedback or suggestions, we'd love to hear from you. Your input helps us improve and provide you with an even better shopping experience.</p>
    <p>Once again, welcome to VCART! We're excited to embark on this shopping journey with you.</p>
    <p>Happy shopping!</p>
    <p>Best regards,<br>Vcart Team Leader Waseem Aziz</p>` // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
