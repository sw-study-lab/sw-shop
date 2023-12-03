import { ValidationError } from "../../../errors";
import * as OrderService from "../services/orderService";

export const getOrderConfirm = async (req, res, next) => {
  const {
    params: { id: productId },
    session: {
      user: { _id: userId },
    },
  } = req;
  try {
    const product = await OrderService.confirm({ productId, userId });
    const pageTitle = "구매 확인";
    return res.render("buy-confirm", { product, pageTitle });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.redirect("/my-profile");
    }
    next(error);
  }
};

export const order = async (req, res, next) => {
  const {
    params: { id: productId },
    session: {
      user: { _id: userId },
    },
  } = req;
  try {
    await new OrderService.buy({ productId, userId });
    return res.redirect("/my-profile");
  } catch (error) {
    next(error);
  }
};
