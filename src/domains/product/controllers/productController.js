import createProductDto from "../dtos/create-userDto";
import * as UploadProductService from "../services/uploadService";
import * as ProductService from "../services/productService";

export const getProductList = async (req, res) => {
  const products = await ProductService.findAll();
  const pageTitle = "Home";
  return res.render("home", { products, pageTitle });
};

export const getUpload = (req, res) => {
  const pageTitle = "Upload";
  return res.render("upload", { pageTitle });
};

export const postProduct = async (req, res, next) => {
  const {
    session: {
      user: { _id },
    },
    file,
  } = req;
  try {
    const data = new createProductDto(req.body);
    const productInfo = { ...data, fileUrl: file.path, owner: _id };
    await UploadProductService.upload(productInfo);
    return res.redirect(303, "/");
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const product = await ProductService.productDetail(id);
    const pageTitle = product.title;
    return res.render("productDetail", { product, pageTitle });
  } catch (error) {
    next(error);
  }
};
