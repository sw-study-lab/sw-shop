import express from "express";
import {
  getOne,
  getUsers,
  postUser,
  removeOne,
  updateOne,
} from "./controllers/userController";
import { validateDto } from "../../middlewares/validateDto";
import createUserDto from "./dto/create-userDto";
import { publicOnly } from "../../middlewares/auth";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(getUsers)
  .post(publicOnly, validateDto(createUserDto), postUser);

userRouter.route("/:id").get(getOne).put(updateOne).delete(removeOne);

export default userRouter;
