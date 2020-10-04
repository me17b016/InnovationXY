const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const Article = require('../../models/Article');
const HospitalOverview = require('../../models/HospitalOverview');

// GET article
router.get('/', async(req, res) => {
  try {
    const articles = await Article.find();
    //console.log(articles);
    res.status(200).json(articles);
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// Create Article
router.post('/', async (req, res) => {
  try {
    //const user = await User.findOne({user: req.body.id).select('-password');
    const userdata = await HospitalOverview.findOne({user: req.body.id});
    console.log(userdata);
    let newArticle = {
      user : req.body.id,
      profilephoto : userdata.logo,
      organisationname: userdata.hospitalname,
      city : userdata.city, 
      title : req.body.title,
      body : req.body.body
    }
    newArticle = new Article(newArticle);
    await newArticle.save();
    res.status(200).json(newArticle);
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router;