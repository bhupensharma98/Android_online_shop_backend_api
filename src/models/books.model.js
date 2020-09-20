const mongoose = require("mongoose");
const Book = mongoose.Schema({
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"register"
  },
  productid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  quantity: String,
  location: String,
  phone: String
});
module.exports = mongoose.model("purchase", Book);
