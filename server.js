// server.js
// =====================================================================

// BASE SETUP
// =====================================================================
var express = require("express");
var bodyParser = require("body-parser");
var sendgrid  = require('sendgrid')(process.env.WEBSITE_SENDGRID_API_KEY);

var app = express();
app.set("views", __dirname + "/views");

// SET ENGINE TEMPLATE
// =====================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(express.static(__dirname + "/public"));

// PASSWORDS
// =====================================================================


// START SERVER
// ===========================================================================
var port = process.env.PORT || 7070;
app.listen(port);
console.log("Express server listening on port " + port);
app.get("/",function(req,res){
  res.sendfile("index.html")
});

app.post("/sendmail", function(req,res){
  var emailObj   = {
    to      : 'james.lai.chen@gmail.com',
    from    : req.body.email,
    subject : 'Contact Me - App: React-Router-Website - FROM: '+req.body.name,
    html    : unescape(req.body.message).replace(/\n/g,"<br>")
  }
  sendgrid.send(emailObj, function(err,json){
    if(err){console.error(err);}
    console.log(json);
    //console.log(req.body);
    //console.log(emailObj);
  });
  res.json("Email Sent. Thank you for your message. I will respond to you ASAP");
})
