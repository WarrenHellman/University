var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bear_house');

var Bear = new mongoose.Schema({
  name: String,
  age: String,
  about: String
})
mongoose.model('Member', Bear); // We are setting this Schema in our Models as 'User'
var Member = mongoose.model('Member') // We are retrieving this Schema from our Models, named 'User'
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  Member.find({}, function(err, members){
    if (err) {
      console.log(err)
    }
    res.render("index", {members: members});
  })
  
});
app.get('/bears/new', function(req, res){
  res.render("new");
});
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
app.post('/bears/:id', function(req, res){
  console.log(req.params.id)
  Member.update({_id: req.params.id}, req.body, function(err, result){
    if(err) {console.log(err)}
    res.redirect("/")
  });
});

app.get('/bears/edit/:id', function(req, res){

  Member.find({_id: req.params.id}, function(err, response){
    if (err){console.log(err)}
    res.render('edit', {bear: response[0]})
  })
})
app.get('/bears/:id', function(req, res){

  Member.find({_id: req.params.id}, function(err, response){
    if (err){console.log(err)}
    res.render('profile', {bear: response[0]})
  })
})

app.post('/bears/delete/:id', function(req, res) {
  Member.remove({_id: req.params.id}, function (err, response){
    if (err) {console.log(err)}
    res.redirect('/')
  })
})


server.listen(80);