import Product from "../models/ProductModel";

export const findAll = () => {
  return Product.find({}).sort({ createdAt: "desc" }).populate("owner");
};

export const createProduct = ({
  fileUrl,
  title,
  description,
  price,
  owner,
}) => {
  return Product.create({
    fileUrl,
    title,
    description,
    price,
    owner,
  });
};
