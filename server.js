if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

const router = express.Router()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
const { route } = require('./routes/index')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) //word after the slash is the name of the database
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)

// const router = express.Router();
// router.get('/', (req,res) => {
//   res.render("testDB",{
//     arrayMuseums: [
//       {id:}
//     ]
//   })

// })

// var dbo = db.db("testDB");
// dbo.collection("testCollection").find({}).toArray(function(err,result){
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });

// // User model 
// const test = mongoose.model('testDB', { 
//   museum: { type: String }, 
//   city: { type: Number } 
// }); 

// // Only one parameter [query/condition] 
// // Find all documents that matches the 
// // condition name='Punit' 
// test.find({ museum: 'MACBA'}, function (err, docs) { 
//   if (err){ 
//       console.log(err); 
//   } 
//   else{ 
//       console.log("First function call : ", docs); 
//   } 
// });

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const MuseumSchema = new Schema({
  // id: ObjectId,
  museum: String,
  city: String
});



//Insert into newcollections
// const Museum = Model('museums', MuseumSchema); //first parameter is the name of the collection
// const newMuseum = new Museum({museum:'Louvre', city:'Paris'})
// newMuseum.save((err,result)=>{
//   if (err) console.log(err);
//   console.log("insert",result);
// })

// router.get('/museums', (req, res) => {
//   Museum.find((err, docs) => {
//     // docs.forEach
//     console.log("find:",docs);
//     res.redirect('/museums', {museum: docs[0]});
//   });
// })

// // Select from newcollections
// Museum.find((err, docs) => {
//   // docs.forEach
//   console.log("find:",docs)
// });



