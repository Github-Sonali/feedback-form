import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Feedback API is running ✅");
});

// ✅ Feedback Routes
app.use("/api/feedback", feedbackRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
