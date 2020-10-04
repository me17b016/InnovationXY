const express = require('express')
const router = express.Router()
const HospitalOverview = require('../../models/HospitalOverview');
const User = require('../../models/User');

// Get all

router.get('/', async(rew, res) => {
  try {
    let hospitals = await HospitalOverview.find();
    res.status(200).json(hospitals);
    //console.log(hospitals)
  } catch (err) {
    res.status(500).send('Server Error')
  }
})

// Get
router.get('/:id', async (req, res) =>{
  try {
    let profile = await HospitalOverview.findOne({ user : req.params.id })
    let newProfile = {
      hospitalname : "",
      logo : "",
      speciality: "",
      anytimeopen : false,
      timings : [],
      city : "",
      contactno : ""
    };
    console.log(req.body)
    if (!profile) {
      let user = await User.findById(req.params.id);
      newProfile.hospitalname = user.name;
      res.json(newProfile);
    }
    else {
      res.json(profile)
    }
  }catch(err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
})
// POST AND PUT

router.post('/', async (req, res) => {
  try{

    let profile = await HospitalOverview.findOne({ user : req.body.id })
    const data = req.body;
    let newProfile = {
      hospitalname : data.hospitalname,
      logo : data.logo,
      speciality: data.speciality,
      anytimeopen : data.anytimeopen,
      timings : data.timings,
      city : data.city,
      contactno : data.contactno
    };
    newProfile.user = data.id
    if (!profile) {
      profile = new HospitalOverview(newProfile);
      await profile.save();
    }
    else {
      profile = await HospitalOverview.findOneAndUpdate(
        {user : req.body.id},
        { $set : newProfile},
        {new: true}
        )
    }
    return res.json(newProfile)
  }catch(error) {
    console.error(error);
    return res.status(500).send('Server Error');
  }
})


module.exports = router;