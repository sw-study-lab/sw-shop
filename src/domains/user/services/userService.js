import { NotFoundError, ValidationError } from "../../../errors";
import createUserDto from "../dtos/create-userDto";
import User from "../models/UserModel";

export const getUserById = (userId) => {
  return User.findById(userId);
};

export const getUserByUsername = (username) => {
  return User.findOne({ username });
};

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

export const registerProduct = async (userId, productId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new NotFoundError("요청한 유저를 찾을 수 없습니다.");
  }
  user.products.push(productId);
  await user.save();
};

export const userDetail = async (userId) => {
  const user = await User.findById(userId).populate([
    { path: "products", select: "title fileUrl" },
    { path: "orders", select: "title fileUrl" },
  ]);
  if (!user) {
    throw new NotFoundError("요청하신 유저는 존재하지 않습니다.");
  }
  return user;
};
