import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({
    message: "Hello from fybe api 👋",
  });
});

export default app;
