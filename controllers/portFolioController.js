const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const senEmailController = (req, res) => {
  //transport function is sy hm apny sendgrid account sy connect kr skty h
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      //api key sendgrid ki pass krni h
      auth: {
        api_key: "Your Api Key",
      },
    })
  );
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(500).send({
        success: false,
        message: "Name,Email and Message is required",
      });
    }
    //email meta or option is function mein multiple objects pass krwanay hotay h
    transporter.sendMail({
      to: "your@gmail.com", // Change to your address
      from: "Your Name <your@example.com>", // sender address
      subject: `Portfolio App New message from ${name} `,
      html: `<h5> Detail Information  </h5> 
        <ul>
        <li>Name : ${name}</li>
        <li>Email : ${email}</li>
        <li>Message : ${message}</li>
        </ul>`,
    });
    res.status(200).send({
      success: true,
      message: "Message send Successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Send Email COntroller Error", error });
  }
};

module.exports = { senEmailController };
