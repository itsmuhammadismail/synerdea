export default function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadismailofficial@gmail.com",
      pass: "Android11*",
    },
  });

  const details = {
    from: "muhammadismailofficial@gmail.com",
    to: "itsmuhammadismail@gmail.com",
    subject: "Testing our nodemail",
    text: "testing our nodemail",
  };
  transporter.sendMail(details, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
