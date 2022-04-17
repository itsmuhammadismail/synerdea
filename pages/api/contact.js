export default function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "muhammadismailofficial@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
