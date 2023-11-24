import { ValidationError } from "../../../errors";
import createUserDto from "../dto/create-userDto";
import User from "../models/UserModel";

export const createUser = async (userDetails) => {
  const { password2, ...data } = new createUserDto(userDetails);
  const { email, username } = data;
  const user = await existsUser({ $or: [{ username }, { email }] });
  if (user) {
    throw new ValidationError(
      "이미 존재하는 유저 이름 또는 이메일입니다.",
      "join"
    );
  }
  return User.create(data);
};

export const existsUser = (filter, toBoolean = true, options) => {
  const query = User.exists(filter, options);
  return toBoolean ? query.then((user) => Boolean(user)) : query;
};
