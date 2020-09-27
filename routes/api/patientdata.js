const express = require('express')
const router = express.Router()
const PatientData = require('../../models/PatientData');

// GET
router.get('/', async (req, res) =>{
  try {
    const patients = await PatientData.find();
    res.status(200).send(patients);
  } catch(err) {
    res.status(500).send('Server error');
  }
})

// POST

router.post('/', async (req, res) => {
  try {
    let patient = new PatientData(req.body);
    await patient.save();
    res.status(200).send({status : "Successfully saved"})
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
})

module.exports = router;