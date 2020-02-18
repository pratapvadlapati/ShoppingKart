let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let productSchema = new Schema ({
_id: Schema.Types.ObjectId,
name: String,
price: Number,
imagePath: String,
desc: String
});



module.exports = mongoose.model('Product', productSchema);