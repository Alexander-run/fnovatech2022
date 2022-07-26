const nodeMailer = require('nodemailer');
let transporter  = nodeMailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  secure: true,
  port:465,
  auth: {
      user: 'fnovatech@gmail.com',
//email address
      pass: 'imjoxmiswijamaeg',
//login password
  }
});
let mailOptions = {
  from: '"Fnovatech Admin" <fnovatech@gmail.com>', // sender address
  to: 'fnovatech@gmail.com', // list of receivers
  subject: 'Hello', // Subject line
  // 发送text或者html格式
  // text: 'Hello world?', // plain text body
  html: '<p>You have received a message from one potential customer</p>' // html body
};


const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path')
app.use(express.static(path.join(__dirname,"/client/build")));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 
app.use(bodyParser.json());
app.get("/*",(req,res) => {
  res.sendFile(path.join(__dirname,"/client/build/index.html"));
});
app.post('/mail',async (req,res) => {
    JSON.stringify(req.body)
    const userName=req.body.userName || ' ';
    const mobile = req.body.mobile || ' ';
    const email = req.body.email || ' ';
    const message = req.body.message || ' ';
    const address = req.body.address || ' ';
    mailOptions.html='<p>You have received a message from one potential customer</p>';
    mailOptions.html+=`<p>Customer name: ${userName}</p>
                       <p>Mobile number: ${mobile}</p>
                       <p>Email address: ${email}</p>
                       <p>Address: ${address}</p>
                       <p>Customer message:</p>
                       <p>${message}</p>`;
    try {
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(400).send(e);
        }
        res.status(201).send({
          "message": "Message sent successfully!We will contact you within 7 days!"
        });
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
      });
    } catch (error) {
      res.status(400).send(e);
    }
});
app.listen(8080,() => {
  console.log("mailer server start, working on port 8080");
});

