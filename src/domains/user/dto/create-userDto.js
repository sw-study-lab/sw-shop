import { ValidationError } from "../../../errors";
import { isEmail, isString, isUsername } from "../../../utils/types";

class createUserDto {
  constructor({ email, username, password, password2 }) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.password2 = password2;
  }

  validate() {
    const { email, username, password, password2 } = this;

    if (!isEmail(email)) {
      throw new ValidationError("올바른 이메일 형식이 아닙니다.", "join");
    }

    if (!isUsername(username)) {
      throw new ValidationError("올바른 사용자 이름 형식이 아닙니다.", "join");
    }

    if (!isString(password) || !isString(password2) || password !== password2) {
      throw new ValidationError(
        "비밀번호가 일치하지 않거나 올바르지 않습니다.",
        "join"
      );
    }
  }
}

export default createUserDto;
