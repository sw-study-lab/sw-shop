import loginDto from "../dtos/loginDto";
import * as LoginService from "../services/loginService";

export const getJoin = (req, res, next) => {
  const pageTitle = "Join";
  return res.render("join", { pageTitle });
};

export const getLogin = (req, res, next) => {
  const pageTitle = "Login";
  return res.render("login", { pageTitle });
};

export const postLogin = async (req, res, next) => {
  try {
    const data = new loginDto(req.body);
    const user = await LoginService.login(data);
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
