import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";
import { handleNotFound } from "./middlewares/errorHandlers/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandlers";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 90000,
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use(mainRoutes);
app.use(handleNotFound);
app.use(errorHandler);

export default app;
