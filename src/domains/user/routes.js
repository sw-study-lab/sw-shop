import express from "express";
import {
  getOne,
  getUsers,
  postUser,
  removeOne,
  updateOne,
} from "./controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(postUser);

userRouter
  .route("/join")
  .get((req, res, next) => res.send("회원가입 페이지 불러오기"))
  .post((req, res, next) => res.send("회원가입 post 요청하기"));

userRouter
  .route("/login")
  .get((req, res, next) => res.send("login 페이지 불러오기"))
  .post((req, res, next) => res.send("login post 요청하기"));

userRouter.route("/logout").get((req, res, next) => res.send("로그아웃 요청"));

userRouter.route("/:id").get(getOne).put(updateOne).delete(removeOne);

export default userRouter;
