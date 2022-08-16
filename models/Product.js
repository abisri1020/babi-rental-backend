const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    category: { type: String, required: true, },
    model: { type: String, required: true, },
    img: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: true, },
    inStock: { type: Boolean, default: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);