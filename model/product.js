const mongoose = require("mongoose");

//creating the product schema

const productSchema = new mongoose.Schema({
  name: String, 
  quantity: Number,
});


//creting a new model called "product"
const Product = mongoose.model("product", productSchema);

module.exports = Product;
