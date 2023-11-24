export const validateDto = (DtoClass) => {
  return (req, res, next) => {
    try {
      const dtoInstance = new DtoClass(req.body);
      dtoInstance.validate();
      next();
    } catch (error) {
      next(error);
    }
  };
};
