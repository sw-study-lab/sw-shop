import express from "express";

const homeRouter = express.Router();

homeRouter.route("/").get((req, res, next) => res.redirect("/products/"));

homeRouter
  .route("/search")
  .get((req, res, next) => res.redirect("/products/search?keyword=school"));

homeRouter
  .route("/upload")
  .get((req, res, next) => res.redirect("/products/upload"));

homeRouter.route("/join").get((req, res, next) => res.redirect("/users/join"));

homeRouter
  .route("/login")
  .get((req, res, next) => res.redirect("/users/login"));

homeRouter
  .route("/logout")
  .get((req, res, next) => res.redirect("/users/logout"));

homeRouter
  .route("/my-profile")
  .get((req, res, next) => res.redirect("/users/1"));

export default homeRouter;
