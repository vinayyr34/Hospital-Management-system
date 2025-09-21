const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientName: String,
    doctorName: String,
    date: Date
});

module.exports = mongoose.model("Appointment", appointmentSchema);
