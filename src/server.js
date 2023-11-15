import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(mainRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
