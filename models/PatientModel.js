const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  complaints: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    required: true,
  },
  general_examination: {
    type: String,    
    required: true,
  },
  level_of_consciousness: {
    type: String,
    required: true,
  },
  vitals: {
    pulse: {
      type: Number,
      required: true,
    },
    bloodPressure: {
      systolic: {
        type: Number,
        required: true,
      },
      diastolic: {
        type: Number,
        required: true,
      },
    },
    temperature: {
      type: Number,
      required: true,
    },
    oxygenSaturation: {
      type: Number,
      required: true,
    },
    bsl: {
      type: Number,
      required: true,
    },
  },
  systematicexam: {
    cvs: {
      type: String,
      required: true,
    },
    rs: {
      type: String,
      required: true,
    },
    cns: {
      type: String,
      required: true,
    },
    pa: {
      type: String,
      required: true,
    },
  },
  local_examination: {
    type: String,
    required: true,
  },
  treatmentPlan: {
    investadvised: {
      type: String,
      required: true,
    },
    medication: {
      type: String,
      required: true,
    },
    specialNeeds: {
      type: String,
      required: true,
    },
  },
  assessedBy: {
    doctorName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
