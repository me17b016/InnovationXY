const express = require('express')
const router = express.Router()
const User = require('../../models/User');

// POST for login
router.post('/', async (req, res) => {
  try {
    const {email, password} = req.body;
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        valid : 0
      })
    }
   // console.log(user, user.name, user.email, user.password, user.patient);
    if (password == user.password) {
      return res.status(200).json({
              name : user.name,
              id : user._id,
              ispatient : user.ispatient,
              valid : 1
            })
    }
      
    res.status(200).json({
      valid : 0
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      valid : 0
    })
  }
})

// POST to insert new user
router.post('/insert', async (req, res) => {
  try {
    let user = {
      name : req.body.name,
      email : req.body.email,
      password: req.body.password,
      ispatient : false
    }
    user = new User(user);
    await user.save();
    res.status(200).json(user)
  } catch(err) {
    res.status(500).send('Server Error')
  }
})


module.exports = router;