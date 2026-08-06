import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import appointmentsRouter from "./routes/appointments.js";
import contactRouter from "./routes/contact.js";
import uploadsRouter from "./routes/uploads.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173").split(",");
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "eversmile-backend" });
});

app.use("/api/appointments", appointmentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/uploads", uploadsRouter);

async function start() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB Atlas");
    } else {
      console.warn("MONGODB_URI not set — running without a database connection.");
    }
    app.listen(PORT, () => console.log(`EverSmile backend running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
