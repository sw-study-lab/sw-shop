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

userRouter.route("/:id").get(getOne).put(updateOne).delete(removeOne);

export default userRouter;
