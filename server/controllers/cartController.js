let Cart = require('../models/cart');
let Products = require('../models/product');
let mongoose = require('mongoose');


//get cart
exports.getCart = function(req,res,next){
    /* if(req.session){
        res.send(req.session.cart);
    }else{
        res.send('no item added to cart')
    } */
      let c = Cart.getCart()
      res.send(c);
}

exports.addToCart = function(req, res, next){
    let qty = parseInt(req.body.qty);
    let productId = req.body.id;
    if (qty > 0){
        Products.findOne({'_id': productId})
        .then(doc => {
            let product = {
                "id": doc._id,
                "name": doc.name,
                "price": doc.price,
                "imagePath": doc.imagePath,
                "qty": qty
         
               }
          
            Cart.addToCart(product, qty);
            Cart.saveCart(req);
               return product;
        }).catch(err=>{ console.log(err); res.json({"status": "unable to add to cart"})})

    }
}


//remove item from cart
exports.removeFromCart = function(req, res, next){
    let productId = req.params.id;
    Cart.removeItemFromCart(productId);
    
}