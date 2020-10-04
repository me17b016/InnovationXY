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

router.post('/filter', async(req, res) => {
  try {
    const patients = await PatientData.find();
    const filter = req.body;
    const diseaseFilter = filter.diseaseCategory;
    const sexFilter = filter.sexCategory;
    let ageFilter = filter.ageCategory;
    const bloodFilter = filter.bloodCategory;
    const availableFilter = filter.availableCategory;
    let filteredData = patients;
    let temData = [];
    // Desease filter
    for (let i = 0; i < patients.length; i++) {
      for (let j = 0; j < patients[i].diseases.length; j++) {
        let diseaseID = `_${patients[i].diseases[j]}`;
        if (diseaseFilter[diseaseID] == true) {
          temData.push(patients[i])
          break;
        }
      }
    }
    // Special condition for disease filter
    let ok = false;
    for (let key in diseaseFilter) {
      if (diseaseFilter[key] == true) {
        ok = true;
        break;
      }
    }

    if (ok) filteredData = temData;


    // Sex filter
    temData = [];
    for (let i = 0; i < filteredData.length; i++) {
      if (sexFilter.all) temData.push(filteredData[i]);
      else if (filteredData[i].sex == 'Male' && sexFilter.male) temData.push(filteredData[i]);
      else if (filteredData[i].sex == 'Female' && sexFilter.female) temData.push(filteredData[i]);
      else if (filteredData[i].sex == 'Other' && sexFilter.other) temData.push(filteredData[i]);
    }  
    // Special condition for sex filter
    if (sexFilter.male == false && sexFilter.female == false && sexFilter.other == false && sexFilter.all == false) temData = filteredData;

    filteredData = temData;

    // Age Filter
    if (ageFilter.min == "") ageFilter.min = 0;
    if (ageFilter.max == "") ageFilter.max = 100;
    temData = [];
    for (let i = 0; i < filteredData.length; i++) {
      if (filteredData[i].age >= ageFilter.min && filteredData[i].age <= ageFilter.max) temData.push(filteredData[i]);
    }

    filteredData = temData;

    // Blood filter
    temData = [];
    for (let i = 0; i < filteredData.length; i++) {
      let bloodType = filteredData[i].bloodgroup;
      let bloodTypeN = bloodType.slice(0, -1);
      bloodType = bloodType.slice(-1);
      if (bloodType == '+') bloodTypeN += 'P';
      else bloodTypeN += 'N';
      if (bloodFilter[bloodTypeN] == true) temData.push(filteredData[i]);
    }
    // Special condition for blood filter
    ok = false;
    for (let key in bloodFilter) {
      if (bloodFilter[key] == true) {
        ok = true;
        break;
      }
    }

    if (ok) filteredData = temData;
    
    // Available filter
    temData = [];
    for (let i = 0; i < filteredData.length; i++) {
      let patient = filteredData[i];
      if ((patient.vaccinations.length > 0 && availableFilter.immunization == true) ||
      (patient.operationdates.length > 0 && availableFilter.surgery == true) ||
      (patient.medicalencouters.length > 0 && availableFilter.medification == true)) temData.push(patient);
    }
    
    // Special condition for available filter
    ok = false;
    for (let key in availableFilter) {
      if (availableFilter[key] == true) {
        ok = true;
        break;
      }
    }

    if (ok) filteredData = temData;

    res.status(200).json(filteredData);

  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
})
module.exports = router;