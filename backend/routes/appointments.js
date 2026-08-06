import { Router } from "express";
import Appointment from "../models/Appointment.js";

const router = Router();

// POST /api/appointments — create a new appointment request
router.post("/", async (req, res) => {
  try {
    const { fullName, phone, treatment, date, time } = req.body;
    if (!fullName || !phone || !treatment || !date || !time) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save appointment." });
  }
});

// GET /api/appointments — list appointments (protect with auth before production use)
router.get("/", async (_req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch appointments." });
  }
});

export default router;
