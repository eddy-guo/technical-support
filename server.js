require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  from: "desertwafffle@gmail.com",
  to: "eddyguo89@gmail.com",
  subject: "Testing with Jaden",
  text: "Hello Eddy Guo! :)",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error Occurs");
  } else {
    console.log("Email sent!");
  }
});
