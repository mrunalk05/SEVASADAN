const mongoose = require("mongoose");

const bedschema= mongoose.Schema({
    roomno:{
        type: String,
        required: true
    },
    bedno:{
        type: String,
        required: true,
    },
    patient:{
        type: String,
        required: true
    }
});

const bedmodel = mongoose.model('bedmodel', bedschema);

module.exports = bedmodel