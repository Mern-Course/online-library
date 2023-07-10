const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: [
    "http://192.168.1.180:3000",
    "http://localhost:3000",
    "https://summersocials.onrender.com",
    process.env.FRONTEND_URI,
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/error");

const user = require("./routes/user");
const book = require("./routes/book");

const app = express();

// MIDDLEWARE STACK
// 0. Cors Policy applied
app.use(cors(corsOptions));

// 1. HTTP security headers
app.use(helmet());

// 2. Rate Limiting
const limiter = rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this IP! Please try again in one hour.",
});
app.use("/api", limiter);

// 3. Development Logging
if (process.env.NODE_ENV === "DEVELOPMENT") app.use(morgan("dev"));

// 4. Body parser
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// 5. Data santization against NOSQL script injection
app.use(mongoSanitize());

// 6. Data santization against cross site scripting attack
app.use(xssClean());

// 7. Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 8. Root handler
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "Welcome wanderer, try visiting /api/v1/users",
  });
});

// ROUTES
// 1. User routes
app.use("/api/v1/users", user);
// 2. Book routes
app.use("/api/v1/books", book);

// 2. Unhandled routes
app.all("*", (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(err);
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
