import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to save feedback" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(allFeedback);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

export default router;
