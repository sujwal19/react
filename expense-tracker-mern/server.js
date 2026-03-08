const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
}

connectDB();

const app = express();
app.use(express.json());

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://expense-tracker-mern-live.vercel.app"
      : "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
const transactions = require("./routes/transactions");
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "client", "dist");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold,
    ),
  );
}
