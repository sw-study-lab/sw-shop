import { NotFoundError } from "../../../errors";
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

export const productDetail = async (productId) => {
  const product = await Product.findById(productId).populate("owner");
  if (!product) {
    throw new NotFoundError("요청하신 상품은 존재하지 않습니다.");
  }
  return product;
};
