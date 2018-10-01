var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//Database Mongoose will use
mongoose.connect('mongodb://localhost/message_board');

// The schema serves as our constructor 
const CommentSchema = new mongoose.Schema({
  comment: {type: String, required: [true, 'You must include a comment']}
});

const MessageSchema = new mongoose.Schema({
  message: {type: String, required: [true, 'You must submit a post'], minlength: [10, "You message must be more that 10 characters"]},
  userID: {type: String}
  comments: [CommentSchema]
});

const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'A name is required']},
  messages: [MessageSchema],
  comments: [CommentSchema]
})


mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

mongoose.model('Message', MessageSchema); 
const Message = mongoose.model('Message') 

mongoose.model('Comment', CommentSchema); 
const Post = mongoose.model('Comment') 

// use it! allows to pull info from forms (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// static content- for all css and photos
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//instructions for root
app.get('/', function(req, res) {
  
  res.render("index");
});

app.post('/message', function(req, res) {
  let newUser = new User()
  newUser.name = req.body.name
  let newMessage = new Message()
  newMessage.message = req.body.message
  
  newUser.save(function(err) {
    if (err) {console.log(err);}
  })
  newMessage.save(function(err) {
    if (err) {console.log(err);}
  })
  res.redirect('/')
})


server.listen(80);