var express =  require('express');

var app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));

app.get("/", function(req,res){
    res.send("Welcome to Musea!")
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    var port22 = server.address().port;

    console.log("Server is listening at port: ",port);
    console.log("NOOOO");
});
