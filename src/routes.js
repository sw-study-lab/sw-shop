import express from "express";
import userRouter from "./domains/user/routes";
import productRouter from "./domains/product/routes";
import homeRouter from "./domains/home/routes";
import authRouter from "./domains/auth/routes";
import orderRouter from "./domains/order/routes";

const router = express.Router();

router.use(homeRouter);
router.use("/users", userRouter);
router.use("/auths", authRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;
