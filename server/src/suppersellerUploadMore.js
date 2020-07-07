var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');

app.use(cors())

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, 'public')
    cb(null, __dirname + '/../../client/public/items_img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

// var upload = multer({ storage: storage }).single('file')
var uploadMore = multer({ storage: storage }).array('file')

module.exports = uploadMore;