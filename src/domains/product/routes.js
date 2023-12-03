import express from "express";
import { privateOnly } from "../../middlewares/auth";
import {
  getProductList,
  getUpload,
  postProduct,
} from "./controllers/productController";
import { productUpload } from "../../middlewares/uploads";
import { validateDto } from "../../middlewares/validateDto";
import createProductDto from "./dtos/create-userDto";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getProductList)
  .post(
    privateOnly,
    productUpload.single("product"),
    validateDto(createProductDto),
    postProduct
  );

productRouter
  .route("/search")
  .get((req, res, next) =>
    res.send(`Searching by... ${req.query.keyword} products`)
  );

productRouter.route("/upload").all(privateOnly).get(getUpload);

productRouter
  .route("/:id")
  .get((req, res, next) =>
    res.send(`${req.params.id} 번 째 상품 정보 받아오기`)
  )
  .put((req, res, next) =>
    res.send(`${req.params.id} 번째 상품 정보 업데이트 하기`)
  )
  .delete((req, res, next) => res.send(`${req.params.id} 번째 상품 삭제`));

export default productRouter;
