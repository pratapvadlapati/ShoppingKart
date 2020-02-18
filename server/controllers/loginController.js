let mongoose = require('mongoose');
let User = require('../models/user');
let passport = require('../config/passport')



//user-register
exports.userRegister = function(req, res, next){

    let username = req.body.username;
    let userpswd = req.body.password;
    let useremail = req.body.email;
     
    let hashedPassword = User.hashPassword(userpswd);


    User.create({"username": username, "password": hashedPassword, "email": useremail}, (err, user)=>{
        if(err){
            console.log('Unable to register user: ' + err);
            res.send({"status": "Pls try again"})
        }else{
           
            res.send(user);
        }
    })

}



//user-login
exports.userLogin = function(req, res, next){
   
   /*  passport.authenticate('local'),
    function(err, user) {
        console.log(req);
        res.send(user);
    }; */

    console.log(req.user);
    User.findOne({"username": req.body.username}, (err, user)=>{
        if(user){
           let isAuthenticted = User.verifyPassword(req.body.password, user.password);
           console.log(req.body.password, user.password)
           if(isAuthenticted === true){
               console.log('user authenticated')
              /*  res.send({"status": true,
                         "user": user.username}); */
                         res.send('true');
           }else{
               res.send('false');
           }

        }
    })

}