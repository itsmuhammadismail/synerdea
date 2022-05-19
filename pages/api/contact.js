export default function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const PASSWORD = process.env.password;

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadismailofficial@gmail.com",
      pass: "Android11*",
    },
  });

  const details = {
    from: "muhammadismailofficial@gmail.com",
    to: "asadlodhii@gmail.com",
    subject: "Synerdea Website Contact",
    text: `${req.body.name} has sent a message from ${req.body.email}`,
  };
  transporter.sendMail(details, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
