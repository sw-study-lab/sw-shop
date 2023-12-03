import { ValidationError } from "../../../errors";
import * as ProductService from "../../product/services/productService";
import * as UserService from "../../user/services/userService";

export const confirm = async ({ productId, userId }) => {
  const product = await ProductService.productDetail(productId);
  const user = await UserService.getUserById(userId).populate("orders");
  if (user.orders.find((order) => String(order._id) == String(productId))) {
    throw new ValidationError("이미 구입한 상품 입니다.", "productDetail");
  }
  return product;
};

export const buy = async ({ productId, userId }) => {
  const user = await UserService.getUserById(userId);
  const product = await ProductService.getProductById(productId);
  product.meta.hits += 1;
  user.orders.push(productId);
  await product.save();
  await user.save();
  return user;
};
