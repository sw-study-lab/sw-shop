import express from "express";
import { getJoin } from "./controllers/authController";
import { publicOnly } from "../../middlewares/auth";

const authRouter = express.Router();

authRouter.route("/join").all(publicOnly).get(getJoin);

authRouter
  .route("/login")
  .get((req, res, next) => res.send("login 페이지 불러오기"))
  .post((req, res, next) => res.send("login post 요청하기"));

authRouter.route("/logout").get((req, res, next) => res.send("로그아웃 요청"));

export default authRouter;
