const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const Post = require('../../models/Post');
const HospitalOverview = require('../../models/HospitalOverview');

// GET post
router.get('/', async(req, res) => {
  try {
    const posts = await Post.find();
    // console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// Create Post
router.post('/', async (req, res) => {
  try {
    //const user = await User.findOne({user: req.body.id).select('-password');
    const userdata = await HospitalOverview.findOne({user: req.body.id});
    // console.log(userdata);
    let newPost = {
      user : req.body.id,
      profilephoto : userdata.logo,
      organisationname: userdata.hospitalname,
      city : userdata.city, 
      title : req.body.title,
      body : req.body.body
    }
    newPost = new Post(newPost);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router;