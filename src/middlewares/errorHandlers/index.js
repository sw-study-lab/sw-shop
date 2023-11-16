import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "../../errors";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res
      .status(400)
      .render(err.view, { errorMessage: err.message, pageTitle: err.view });
  }

  if (err instanceof UnauthorizedError) {
    return res
      .status(401)
      .render(err.view, { errorMessage: err.message, pageTitle: err.view });
  }

  if (err instanceof ForbiddenError) {
    return res
      .status(403)
      .render(err.view, { errorMessage: err.message, pageTitle: err.view });
  }

  if (err instanceof NotFoundError) {
    return res
      .status(404)
      .render("404", { errorMessage: err.message, pageTitle: "404" });
  }

  console.error(err.message);
  return res.status(err.status || 500).render("500");
};
