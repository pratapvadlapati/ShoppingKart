let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs');



let userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

let User = module.exports = mongoose.model('User', userSchema);

 module.exports.findUser = function(username){
    User.findOne({"username": username}, (err, user)=>{
        if(err) throw err;
        return user;
    })
} 

//create pswd hashing methods

module.exports.hashPassword = function(password){
    /* bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
      cb(hash);
        });
    }); */

    let salt = bcrypt.genSaltSync(10);
    return hash = bcrypt.hashSync(password, salt);
}


//compare hashed password

 module.exports.verifyPassword = function(hashedPassword, password){
    let comparePswd = bcrypt.compareSync(hashedPassword, password);
    return comparePswd;

 }

 


