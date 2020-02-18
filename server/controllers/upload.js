let express = require('express');
let mongoose = require('mongoose');
let multer = require('multer');
let path = require('path')

//set multer upload storage

let storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req, file, cb){
        cb(null, req.body.name + '-' + Date.now() + '-'+ path.extname(file.originalname));
    }
})

//instantiate upload - multer instance

let upload = multer({
    storage: storage
}).single('image');


module.exports = upload;