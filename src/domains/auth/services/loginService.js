import loginDto from "../dtos/loginDto";
import * as UserService from "../../user/services/userService";
import * as AuthService from "./authService";
import { UnauthorizedError } from "../../../errors";

export const login = async (loginData) => {
  const { username, password } = new loginDto(loginData);
  const user = await UserService.getUserByUsername(username);
  if (!user) {
    throw new UnauthorizedError("잘못된 이메일 또는 비밀번호", "login");
  }
  await AuthService.verifyAuth(user._id, password);
  return user;
};
