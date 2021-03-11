const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { route } = require('./index')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) //word after the slash is the name of the database
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

router.get('/', (req, res) => {
  res.render('index')
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MuseumSchema = new Schema({
  _id: ObjectId,
  name: String,
  address: String,
  city: String,
  country: String,
  location: Array,
  exhibitions: Array,
});
const Model = mongoose.model;
const Museum = Model('museums', MuseumSchema); //first parameter is the name of the collection

router.get('/museums', (req, res) => {
  Museum.find((err, docs) => {
    // docs.forEach
    console.log("find:",docs);
    // res.render('museums', {museums: docs});
    res.json({museums: docs});
  });
})


module.exports = router