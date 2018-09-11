// Here's a cleaner version using Socket.io
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require("path");

var session = require("express-session");

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
app.get('/', function(req, res) {
  res.render("index");
});

server.listen(80);
// WARNING: app.listen(80) will NOT work here!


io.on('connection', function (socket) {
  
});
