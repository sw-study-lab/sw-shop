import Product from "../models/ProductModel";

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
