const mongoose = require("mongoose");
// autoIncrement.initialize(mongoose.connection);
const patternSchema= mongoose.Schema({
    Category: {
        type: String,
        required: true,
        enum: ["Antibiotics",
        'Analgesics',
            'Antipyretics',
            'Anticoagulants',
            'Antihypertensives',
            'Antidepressants',
            'Antidiabetic-medications',
           'Anticonvulsants',
           'Antiemetics',
           'Anti-inflammatory drugs'],
      },
                         
    Dosage:{
        type: String,
        required: true
    },
    Strength:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    ExpDate:{
        type: String,
        required: true
    },
    Storage:{
        type: String,
        required: true
    },
    Manuf:{
        type: String,
        required: true
    },
    ndc:{
        type: String,
        required: true
    },
    barcode:{
        type: String,
        required: true
    }
});

const patternn = mongoose.model("patternn", patternSchema);

module.exports = patternn;