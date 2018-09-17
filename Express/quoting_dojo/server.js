var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var session = require("express-session");

app.use(session({
  secret: 'catwrestler',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })
 mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
 var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  // User.find({}, function(err, users){
    
  // })
  res.render("index");
  
});
app.get('/quotes', function(req, res){
  res.render("quotes");
});
app.post('/quotes', function(req, res){
  console.log("POST DATA: ", req.body);

  res.redirect("/quotes");
});

server.listen(80);