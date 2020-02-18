let Product = require('../models/product');
let mongoose = require('mongoose');



exports.getProducts = function(req, res, next){
    Product.find()
    .exec()
    .then(products => {
       // console.log(products);
        res.send(products)
    }).catch(err => {
        console.log(err)
        res.send('error')
    })
}

exports.addProduct = function(req, res, next){

    //console.log(req.file);
   // console.log(req.body);
    
// handle file req using multer middlewear, so you will get file upload details

    let product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
            imagePath: req.file.path,
            desc: req.body.desc
    });

    //save the product
    product
    .save()
    .then((doc)=>{
      res.send({
          "id": doc._id,
          "name": doc.name,
          "price": doc.price,
          "imagePath": doc.imagePath
      })
    })
    .catch(err=> res.status(500).json({"resp": "unable to save product"}));
        
    


}