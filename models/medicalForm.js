const mongoose = require('mongoose');
const Appointment = require('../models/appointment');

const medicalFormSchema = new mongoose.Schema({
    diagnose:String,
    symptoms:String,
    description:String, 
    prescription:String,
    doctorAdvice:String,
    appointment_id:{
        type: mongoose.Schema.ObjectId,
        ref:Appointment,
        required:true,
    }

},
{ timestamps: true })


const medicalForm = mongoose.model(' medicalForms', medicalFormSchema );
module.exports =  medicalForm;