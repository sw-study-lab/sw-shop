import { ValidationError } from "../../../errors";
import { isPrice, isString } from "../../../utils/types";

class createProductDto {
  constructor({ title, price, description }) {
    this.title = title;
    this.price = Number(price);
    this.description = description;
  }

  validate() {
    const { title, price, description } = this;

    if (!isString(title)) {
      throw new ValidationError("제목이 올바른 형식이 아닙니다.", "upload");
    }
    if (!isPrice(price)) {
      throw new ValidationError("가격이 올바른 형식이 아닙니다.", "upload");
    }
    if (!isString(description)) {
      throw new ValidationError("설명이 올바른 형식이 아닙니다.", "upload");
    }
  }
}

export default createProductDto;
