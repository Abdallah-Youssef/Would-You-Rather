const express = require('express')
const cors = require('cors');
const User = require('./models/user')
const Question = require('./models/questions')
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb://localhost:27017/wyrDB',
    {
      useNewUrlParser: true,
      authSource: "admin",
      user: "root",
      pass: "example",
      
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', async (req, res) => {
  const queryResult = await Question.find()
  res.send(queryResult)
})


app.listen(3001)