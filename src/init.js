import "dotenv/config";
import "./config/dbConfig";
import app from "./server";

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✅ Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
