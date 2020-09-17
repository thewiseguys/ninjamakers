const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multipart = require('connect-multiparty');
var fs = require('fs');
const nodemailer = require("nodemailer");
const ejs = require('ejs');


var multipartMiddelware = multipart();

//const authRoutes = require('./routes/auth-routes');

var port = process.env.PORT || 80;
const app = express();

app.use(bodyParser.json());
app.use(multipartMiddelware);
app.use(bodyParser.urlencoded({extended: true}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/public', express.static(__dirname+'/public'));
app.use('/node_modules', express.static(__dirname+'/node_modules'));

// set view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});


// create kids route
app.get('/payment_successful', (req, res) => {
    res.sendFile(path.join(__dirname+'/payment_successful.html'));
});

app.post('/demoForm', (req, res) => {
			console.log("I am being hit");
       	
			console.log(req.body);

			// Email Sending Code .................................................................
			console.log("Now Sending Mail");
            // Change this to one of your email addresses in the organisation
            const YOUR_EMAIL_ADDRESS = 'anupam@thehocket.com';
            // Change this to the receiver to the mail
            const SEND_TO = req.body.Email;
			  let transporter = nodemailer.createTransport({
			    host: 'smtp.gmail.com',
			    secure: false, // true for 465, false for other ports
			    auth: {
			      user: "iamanupamrana@gmail.com", // generated ethereal user
			      pass: "Password@123", // generated ethereal password
			    },
			  });

                //console.log("Loading ejs now");
                var email_subject = 'Website: New Demo Request - '  + req.body.name;
                var formData = req.body;
                console.log("Data being sent is: ",formData);
                ejs.renderFile(__dirname + "/demoFormMail.ejs", formData, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                        var mainOptions = {
                            from: 'iamanupamrana@gmail.com',
                            to: "anupam@thehocket.com",
                            cc: "yashaswi@thehocket.com",
                            subject: email_subject,
                            html: data
                            };
                            //console.log("html data ======================>", mainOptions.html);
                            transporter.sendMail(mainOptions, function (err, info) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log('Message sent: ' + info.response);
                                }
                            });
                        }

                        });
            // Mail Sent 
                        res.send({"status": 200, "data": "POST recieved"});
                        res.end();
                        console.log("This Works");

});



app.listen(port, () => {
    console.log('Server is running on port', port);
});
