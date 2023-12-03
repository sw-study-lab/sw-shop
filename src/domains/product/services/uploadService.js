import * as ProductService from "../services/productService";
import * as UserService from "../../user/services/userService";
export const upload = async (data) => {
  const { owner } = data;
  const newProduct = await ProductService.createProduct(data);
  await UserService.registerProduct(owner, newProduct._id);
};
