module.exports = function Route(app){

  app.get('/', function(req, res) {
    res.render("index");
  });
  app.post('/submit', function(req, res) {
    
    res.redirect('/')
  })

};