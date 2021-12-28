const { response } = require('express');
const express = require('express')
const patientModel = require('../models/PatientModel')
const router = express.Router()

// http://localhost:8989/patient/savepatient
router.post("/savepatient",(request,response)=>
{
    var data = request.body;
    patientModel.savePatient(data,(result,patient)=>{
        //console.log(result)
        response.json({status:result,patient:patient})
    })
})

// http://localhost:8989/patient/fetchpatients
router.get("/fetchpatients",(request,response)=>{
    patientModel.fetchPatients(data=>{
        response.json(data)
    })
})

module.exports = router