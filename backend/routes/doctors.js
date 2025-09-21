const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

// Add new doctor
router.post("/", async (req, res) => {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.json({ message: "Doctor added successfully" });
});

module.exports = router;
