const mongoose = require('mongoose');

const HospitalUserSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    required: true
  },
  hospitalname : {
    type : String,
    required: true
  },
  logo: {
    type: String
  },
  speciality : {
    type : String,
  },
  anytimeopen : Boolean,
  timings : [{
    days : {type : String},
    timing : {type : String}
  }],
  city : {
    type : String,
    required : true
  },
  contactno : {
      type : String,
      required: true
  }
});

module.exports = HospitalOverview = mongoose.model('hospitaloverview', HospitalUserSchema);