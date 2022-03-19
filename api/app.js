import path from "path";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";

import { AppError } from "./@utils/index.js";
import { errorController as globalErrorHandler } from "./controllers/index.js";
import { authRoutes } from "./routes/index.js";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(path.dirname("."), "views"));

// TODO: check whitelist control here
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : [/\.fybe\.io$/],
    credentials: true,
  })
);

app.options(
  "*",
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : [/\.sosyopolitik\.com$/],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(mongoSanitize());

app.use(helmet());

app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({
    message: "Hello from fybe api 👋",
  });
});

app.use("/api/v1/auth", authRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
