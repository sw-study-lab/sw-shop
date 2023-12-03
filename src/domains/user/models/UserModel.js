import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  avatarUrl: { type: String, default: "" },
  password: { type: String, required: true, trim: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model("User", userSchema);
export default User;
