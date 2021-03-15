if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
// eslint-disable-next-line node/no-path-concat
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// const mongoose = require('mongoose')
// const { route } = require('./routes/index')
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // word after the slash is the name of the database
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const MuseumSchema = new Schema({
//   id: ObjectId,
//   museum: String,
//   city: String
// });
