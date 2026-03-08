const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// CORS Configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://your-deployed-app.vercel.app" // Update this after deploying
      : "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Logging for development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
const transactions = require("./routes/transactions");
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "dist")));

  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
);
