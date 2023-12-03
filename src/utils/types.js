const getType = (target) => Object.prototype.toString.call(target).slice(8, -1);

const isType = (type) => (target) => getType(target) === type;

export const isString = isType("String");
export const isNumber = isType("Number");
export const isBoolean = isType("Boolean");
export const isNull = isType("Null");
export const isUndefined = isType("Undefined");
export const isObject = isType("Object");
export const isArray = isType("Array");
export const isDate = isType("Date");
export const isRegExp = isType("RegExp");
export const isFunction = isType("Function");

export const isEmail = (target) => {
  if (!isString(target)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(target);
};

export const isUsername = (target) => {
  return isString(target);
};

export const isPrice = (target) => {
  if (!isNumber(target)) return false;
  if (target < 0 || isNaN(target)) return false;
  return true;
};
