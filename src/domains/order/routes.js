import express from "express";
import { getOrderConfirm, order } from "./controllers/orderController";
import { privateOnly } from "../../middlewares/auth";

const orderRouter = express.Router();

orderRouter.route("/:id([0-9a-f]{24})").all(privateOnly).get(order);

orderRouter.route("/products/:id").all(privateOnly).get(getOrderConfirm);

export default orderRouter;
