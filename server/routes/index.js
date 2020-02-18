var express = require('express');
var router = express.Router();
let upload = require('../controllers/upload');
let Product = require('../controllers/productController');
let Cart = require('../controllers/cartController');
let User = require('../controllers/loginController');


//register route
router.post('/user/register', User.userRegister);


//user-login route
router.post('/user/login', User.userLogin);

/* GET home page. */
router.get('/products-list', Product.getProducts);

//route to add product
router.post('/add-product', upload, Product.addProduct);

//route to add prod to cart
router.post('/add-to-cart', Cart.addToCart);

//route to get cart 
router.get('/get-cart', Cart.getCart);

//route to remove cart
router.post('/remove-from-cart/:id', Cart.removeFromCart);

module.exports = router;
