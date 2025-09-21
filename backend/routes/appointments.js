const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Get all appointments
router.get("/", async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

// Book appointment
router.post("/", async (req, res) => {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.json({ message: "Appointment booked successfully" });
});

module.exports = router;
