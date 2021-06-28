import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async (req, res) => {
  const { name, email, description } = req.body;

  const emailMessage = {
    from: "desertwafffle@gmail.com",
    to: "eddyguo89@gmail.com",
    subject: `New support ticket from ${name} (${email})`,
    text: description,
  };

  try {
    await transporter.sendMail(emailMessage);
  } catch {
    res.status(502).end();
  }

  res.status(200).end();
}