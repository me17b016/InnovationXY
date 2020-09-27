// require('dotenv/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT

// Setup of App
app.use(cors())
app.use(express.json())

// Connecting to Database (MongoDB)
mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

// Testing Route
app.get('/', (req, res) => {
  res.send("<h1> AGBI hackathon 2020 </h1>")
})

// Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/hospitalprofile', require('./routes/api/hospitalprofile'));
app.use('/api/patientdatainsert', require('./routes/api/patientdata'));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build')); 
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // relative path
  // });
}

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT)
})
