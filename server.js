'use strict';

var express = require('express');
var cors = require('cors');
const fs = require("fs"); 
// require and use "multer"...
var multer = require("multer");
var upload = multer({dest:'uploads/'});
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

//application

//Load the filesystem module
app.post('/api/fileanalyse',upload.single('upfile'),function(req,res){
    // res.render('home',{fileSize: req.file.size});
    fs.unlink(req.file.path,(err)=>{
        if(err) console.log(err);});
    res.json({fileSize: req.file.size})
});


app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
