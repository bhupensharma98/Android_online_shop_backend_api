const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
  category: String,
  deliveryarea: String
});

module.exports = mongoose.model("product", productSchema);