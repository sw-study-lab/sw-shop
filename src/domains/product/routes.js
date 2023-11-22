import express from "express";

const productRouter = express.Router();

productRouter
  .route("/")
  .get((req, res, next) => res.render("home"))
  .post((req, res, next) => res.send("상품 생성"));

productRouter
  .route("/search")
  .get((req, res, next) =>
    res.send(`Searching by... ${req.query.keyword} products`)
  );

productRouter
  .route("/upload")
  .get((req, res, next) => res.send("상품 등록 페이지 불러오기"))
  .post((req, res, next) => res.send("상품 등록 post 요청하기"));

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
