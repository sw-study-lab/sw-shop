import express from "express";

const userRouter = express.Router();

userRouter
  .route("/")
  .get((req, res, next) => res.send("전체 유저 목록"))
  .post((req, res, next) => res.send("user 생성"));

userRouter
  .route("/join")
  .get((req, res, next) => res.send("회원가입 페이지 불러오기"))
  .post((req, res, next) => res.send("회원가입 post 요청하기"));

userRouter
  .route("/login")
  .get((req, res, next) => res.send("login 페이지 불러오기"))
  .post((req, res, next) => res.send("login post 요청하기"));

userRouter.route("/logout").get((req, res, next) => res.send("로그아웃 요청"));

userRouter
  .route("/:id")
  .get((req, res, next) =>
    res.send(`${req.params.id} 번 째 유저 정보 받아오기`)
  )
  .put((req, res, next) =>
    res.send(`${req.params.id} 번째 유저 정보 업데이트 하기`)
  )
  .delete((req, res, next) => res.send(`${req.params.id} 번째 유저 삭제`));

export default userRouter;
