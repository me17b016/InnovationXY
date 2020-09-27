const mongoose = require('mongoose');

const PatientData = new mongoose.Schema({
  name : String,
	phonenumber: String,
	email : String,
	age : Number,
	sex: String,
	bloodgroup: String,
	occupation: String,
	diseases : [Number],
	seriousness: Number,
	membersid: [],
	commonfamilydisease: String,
	height: Number,
	weight: Number,
	bmi: Number,
	bodyfat: Number,
	country: String,
	state: String,
	district: String,
	pincode: Number,
	completeaddress: String,
	gpscoordinates: {x : Number, y : Number},
	operationdates: [Date],
	operationresults: [String],
	vaccinations: [String],
	medicalencouters: [String]
});

module.exports = PatientD = mongoose.model('patientdata', PatientData);