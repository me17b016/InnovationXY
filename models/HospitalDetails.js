const mongoose = require('mongoose');

const HospitalDetailsSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    required: true
  },
  address : {
    type : String,
    required: true
  },
  services : [{
    service: String
  }],
  amentities : [{
    amentity : String
  }],
  emergencyno : {
    type: String
  },
  noofambulance : Number,
  noofbeds : Number,
  photos : [{
    photo : {
      type : String
    }
  }],
  doctors : [{
    doctor : {
      name : {type : String, required : true},
      profilephoto : {type: String},
      experience : {type: Number, required: true},
      
    }
  }]
})