import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import farmacyAncRouter from "./routes/farmacyAncRouter.js";
import farmacyApteka24Router from "./routes/farmacyApteka24Router.js";
import farmacyAptekaOnlineRouter from "./routes/farmacyAptekaOnlineRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/anc24", farmacyAncRouter);
app.use("/api/apteka24", farmacyApteka24Router);
app.use("/api/apteka-online", farmacyAptekaOnlineRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT = 3000 } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, function () {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
