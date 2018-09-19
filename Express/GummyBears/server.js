var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//Database Mongoose will use
mongoose.connect('mongodb://localhost/bear_house');

// The schema serves as our constructor 
const Bear = new mongoose.Schema({
  name: String,
  age: String,
  about: String
})

mongoose.model('Member', Bear); // We are setting this Schema in our Models as 'Member'
const Member = mongoose.model('Member') // We are retrieving this Schema from our Models, named 'User'
// use it! allows to pull info from forms (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// static content- for all css and photos
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//instructions for root
app.get('/', function(req, res) {
  //looks up all members in our bear_house database
  Member.find({}, function(err, members){
    if (err) {
      console.log(err)
    }
    // creates and returns an object 'members' with the returned database members as a value
    res.render("index", {members: members});
  })
});

app.get('/bears/new', function(req, res){
  res.render("new");
});

// creates a new member with the info from the form, saves it and goes back to root
app.post('/bears', function(req, res) {
  let newBear = new Member(req.body);
  newBear.save(function(err){
    if (err){
      console.log(err);
      res.redirect("/bears/new");
    }
    res.redirect('/');
  })
});

//The :id stores as a params variable the unique id we are passing through the url.
app.post('/bears/:id', function(req, res){
  console.log(req.params.id)
  // Queries the database for the unique id, passes all of the form info to completely update the database document
  Member.update({_id: req.params.id}, req.body, function(err, result){
    if(err) {console.log(err)}
    res.redirect("/")
  });
});

//Again, the url contains a parameter variable id
app.get('/bears/edit/:id', function(req, res){
  Member.find({_id: req.params.id}, function(err, response){
    if (err){console.log(err)}
    // passes the info from our response (which is expecting a single user, first index of the array). 
    res.render('edit', {bear: response[0]})
  })
})

//shows info for each bear member. 
app.get('/bears/:id', function(req, res){
  Member.find({_id: req.params.id}, function(err, response){
    if (err){console.log(err)}
    res.render('profile', {bear: response[0]})
  })
})

//deletes a user
app.post('/bears/delete/:id', function(req, res) {
  Member.remove({_id: req.params.id}, function (err, response){
    if (err) {console.log(err)}
    res.redirect('/')
  })
})


server.listen(80);