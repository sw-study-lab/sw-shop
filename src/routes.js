import express from "express";
import userRouter from "./domains/user/routes";
import productRouter from "./domains/product/routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;
