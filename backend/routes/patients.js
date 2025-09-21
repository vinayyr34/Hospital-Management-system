const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router();

// Get all patients
router.get("/", async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
});

// Add new patient
router.post("/", async (req, res) => {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.json({ message: "Patient added successfully" });
});

module.exports = router;
