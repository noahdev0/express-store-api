import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"] },
  price: { type: Number, required: [true, "Please provide a price"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

export default mongoose.model("Product", productSchema);
// Path: db/connect.mjs
// Compare this snippet from models/product.mjs:
