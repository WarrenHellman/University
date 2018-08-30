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

require('./routes/route.js')(app);

const server = app.listen(8000)
const io = require('socket.io')(server);
// var counter = 0;
    
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
    
});

