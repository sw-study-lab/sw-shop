import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  title: { type: String, required: true, trim: true },
  description: {
    type: String,
    required: true,
    default: "해당 설계도에 대한 설명 내용은 없습니다.",
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
  meta: {
    hits: { type: Number, default: 0 },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

productSchema.pre("validate", function (next) {
  this.description = this.description.trim();

  if (this.description === "") {
    this.description = "해당 설계도에 대한 소개 내용은 없습니다.";
  }
  next();
});

const Product = mongoose.model("Product", productSchema);
export default Product;
