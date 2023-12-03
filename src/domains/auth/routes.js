import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postLogin,
} from "./controllers/authController";
import { privateOnly, publicOnly } from "../../middlewares/auth";
import { validateDto } from "../../middlewares/validateDto";
import loginDto from "./dtos/loginDto";

const authRouter = express.Router();

authRouter.route("/join").all(publicOnly).get(getJoin);

authRouter
  .route("/login")
  .all(publicOnly)
  .get(getLogin)
  .post(validateDto(loginDto), postLogin);

authRouter.all(privateOnly).route("/logout").get(logout);

export default authRouter;
