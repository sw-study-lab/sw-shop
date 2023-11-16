import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";
import { handleNotFound } from "./middlewares/errorHandlers/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandlers";

const app = express();

app.use(morgan("dev"));
app.use(mainRoutes);
app.use(handleNotFound);
app.use(errorHandler);

export default app;
