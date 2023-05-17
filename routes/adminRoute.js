const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const Patient = require("../models/PatientModel");
const authMiddleware = require("../middlewares/authMiddleware");
const mongoose = require("mongoose");

router.get("/get-all-doctors", authMiddleware, async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).send({
      message: "Doctors fetched successfully",
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
});

router.get("/get-all-users", authMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
});

router.post(
  "/change-doctor-account-status",
  authMiddleware,
  async (req, res) => {
    try {
      const { doctorId, status } = req.body;
      const doctor = await Doctor.findByIdAndUpdate(doctorId, {
        status,
      });

      const user = await User.findOne({ _id: doctor.userId });
      const unseenNotifications = user.unseenNotifications;
      unseenNotifications.push({
        type: "new-doctor-request-changed",
        message: `Your doctor account has been ${status}`,
        onClickPath: "/notifications",
      });
      user.isDoctor = status === "approved" ? true : false;
      await user.save();

      res.status(200).send({
        message: "Doctor status updated successfully",
        success: true,
        data: doctor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error applying doctor account",
        success: false,
        error,
      });
    }
  }
);

router.post("/register-patient", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      occupation,
      phone,
      address,
      complaints,
      history,
      allergies,
      general_examination,
      level_of_consciousness,
      vitals,
      systematicexam,
      local_examination,
      treatmentPlan,
      assessedBy,
    } = req.body;

    const patient = new Patient({
      name,
      age,
      gender,
      occupation,
      phone,
      address,
      complaints,
      history,
      allergies,
      general_examination,
      level_of_consciousness,
      vitals,
      systematicexam,
      local_examination,
      treatmentPlan,
      assessedBy,
    });

    const result = await patient.save();

    res.status(201).json({
      message: "Patient created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating patient",
      success: false,
      error,
    });
  }
});

/* pateints */
router.get("/patients", authMiddleware, async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(200).send({
      message: "Patients fetched successfully",
      success: true,
      data: patients,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching patients",
      success: false,
      error,
    });
  }
});
// Route definition
router.delete("/api/patients/:id", (req, res) => {
  const id = req.params.id;

  // Handle the request
  db.deletePatient(id)
    .then(() => {
      // Respond with a success message
      res
        .status(200)
        .json({ success: true, message: "Patient deleted successfully." });
    })
    .catch((error) => {
      // Respond with an error message
      res.status(500).json({ success: false, error: error.message });
    });
});
router.get("/view/patient/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// Update patient by ID
router.put("/patients/:id", async (req, res) => {
  const id = req.params.id;
  const {
    name,
    age,
    phone,
    address,
  } = req.body;

  try {
    // Find the patient with the given ID
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Update the patient's information
    patient.name = name || patient.name;
    patient.age = age || patient.age;
    
    patient.phone = phone || patient.phone;
    patient.address = address || patient.address;
     

    // Save the updated patient to the database
    const updatedPatient = await patient.save();

    res.json(updatedPatient);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/patients/:id", authMiddleware, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }
    await patient.remove();
    return res.json({ success: true, message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
module.exports = router;
