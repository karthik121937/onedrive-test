//https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=971cb1f2-c88f-444f-9e87-ac1ae02f4791&scope=files.readwrite offline_access&response_type=code&redirect_uri=https://086a88de.ngrok.io/gettoken

var express = require('express');
var router = express.Router();
// var upload = require('./test');
/* GET home page. */
var url = require('url');
var formidable = require('formidable');
var fs = require('fs');
var upload = require('./test')

var token = '';

function getToken(data, cb) {

  var request = require("request");

  var options = {
    method: 'POST',
    url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: data
  };

  request(options, function (error, response, body) {
    // console.log(body)
    if (error) throw new Error(error);
    else cb(null, body);
  });

}

router.get('/', function (req, res) {
  res.render('index');
})

router.post('/fileupload', function (req, res) {
  var form = new formidable.IncomingForm();

  // form.encoding = 'utf-8';
  form.uploadDir = "/home/lns43/Desktop/Karthik/";
  form.parse(req, function (err, fields, files) {
    let ss = JSON.stringify(files);
    let out = JSON.parse(ss);

    console.log(out, out.fileToUpload.path, out.fileToUpload.name)
    var filename = out.fileToUpload.name
    fs.readFile(out.fileToUpload.path, function (err, data) {
      upload.upload(token, filename, data, function (err, data) {
        if (err) {
          console.log(err);
          res.end(err)
        } else {
          console.log("file upload success")
          res.end(data)
        }
      })
    })

  })
})

router.get('/gettoken', function (req, res, next) {

  console.log(req.query)

  var clientId = "971cb1f2-c88f-444f-9e87-ac1ae02f4791";
  var client_sec = "iviPMKK838~_*njaaZFP43$"
  var scope = "files.readwrite offline_access";
  var red_url = "https://086a88de.ngrok.io/gettoken";
  var code = req.query.code;

  var bb = "client_id=" + clientId + "&redirect_uri=" + red_url + "&client_secret=" + client_sec + "&code=" + code + "&grant_type=authorization_code"


  getToken(bb, function (err, data) {
    if (err) {
      console.log(err)
      res.send("errr")
    } else {
      var x = JSON.parse(data)
      console.log(x.access_token);
      token = x.access_token
      res.redirect('/')
    }
  })

  // console.log("reqqqqqqqqqqqqqqqqqqqqqq",req,"getttt")
  // console.log("rrrrrrrrrrrrreeee",req.query);
  // console.log("params",req.params);

  // var url_parts = url.parse(req.url, true);
  // var query = url_parts.query;
  // console.log(query)

  // if(req.params){
  //   console.log(req.query)
  //   console.log("hiii\t",req.url,"hiii\t",req.url_parts,"hiii\t",req.baseUrl);
  //   console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  //   console.log(req.path)
  //   // console.log("responseeeeeeeeee",res)
  //   res.send(JSON.stringify(req.params));

  // }else{
  //   res.send("errrrrot")
  // }
  // res.send("hiiiii")
});




module.exports = router;
