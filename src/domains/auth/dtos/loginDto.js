import { ValidationError } from "../../../errors";
import { isString, isUsername } from "../../../utils/types";

class loginDto {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }

  validate() {
    const { username, password } = this;

    if (!isUsername(username)) {
      throw new ValidationError("올바른 사용자 이름 형식이 아닙니다.", "login");
    }

    if (!isString(password)) {
      throw new ValidationError(
        "비밀번호가 일치하지 않거나 올바르지 않습니다.",
        "login"
      );
    }
  }
}

export default loginDto;
