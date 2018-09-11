// Here's a cleaner version using Socket.io
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require("path");
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



let counter;

io.on('connection', function (socket) {
  // socket.emit('news', { hello: 'world' });
  if (!counter) {counter = 0};
  socket.on('pressed', function () {
    counter+=1;
    let msg = "The button has been pressed "+counter+" time(s)"
    socket.emit('count', msg)
  });
  socket.on("clear", function(){
    counter = 0;
    let msg = "The count has been cleared"
    socket.emit('count', msg)
  })
});



// // require express
// var express = require("express");
// // path module -- try to figure out where and why we use this
// var path = require("path");
// // create the express app
// // var session = require("express-session");
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// var bodyParser = require('body-parser');
// // use it!
// app.use(bodyParser.urlencoded({ extended: true }));
// // static content
// app.use(express.static(path.join(__dirname, "./static")));
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// // root route to render the index.ejs view
// // require('./routes/route.js')(app);
// // tell the express app to listen on port 8000


// app.listen(8000, function() {
//   console.log("listening on port 8000");
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });