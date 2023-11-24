import loginDto from "../dtos/loginDto";
import * as LoginService from "../services/loginService";

export const getJoin = (req, res, next) => {
  return res.render("join");
};

export const getLogin = (req, res, next) => {
  return res.render("login");
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
