// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require("express-session");
var app = express();

app.use(session({
  secret: 'catwrestler',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  res.render("index");
});

app.post('/display', function(req, res) {
  req.session.name = req.body.name;
  req.session.language = req.body.language;
  req.session.location = req.body.location;
  req.session.comment = req.body.comment;
  res.redirect('/results');
})

app.get('/results', function(req, res) {
  let info = {};
  info.name = req.session.name;
  info.location = req.session.location;
  info.language = req.session.language;
  info.comment = req.session.comment;
  res.render("results", info )
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});

