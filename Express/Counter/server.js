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
  res.render("index", { count: addOne(req)} );
});

app.post('/plustwo', function(req, res) {
  addOne(req)
  res.redirect('/')
})

app.post('/reset', function(req, res) {
  reset(req);
  res.redirect('/')
})

function addOne(req) {
  if (!req.session.count){
    req.session.count = 1;
  }
  else {req.session.count +=1}
  console.log('session is at '+req.session.count)
  return req.session.count;
}

function reset(req) {
  req.session.destroy();
}
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});

