const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');


// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp(functions.config().firebase);


const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onCreate(event => {
    
    const val = event.val();
    
    const mailOptions = {
      to: 'benjaminweinberger@gmail.com',
      subject: `Contact Request from ${val.name}`,
      html: val.html
    };
    return mailTransport.sendMail(mailOptions).then();
      
  });