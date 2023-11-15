import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
