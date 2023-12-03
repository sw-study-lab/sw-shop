import "dotenv/config";
import "./config/dbConfig";
import "./domains/user/models/UserModel";
import "./domains/product/models/ProductModel";
import app from "./server";

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✅ Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
