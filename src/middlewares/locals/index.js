export const locals = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Swhub";
  res.locals.loggedInUser = req.session.user ?? {};
  next();
};
