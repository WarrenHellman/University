module.exports = function Route(app){

  app.get('/', function(req, res) {
    if (!req.session.number){
      req.session.number = Math.floor(Math.random()*50+1)
      console.log('session number is '+req.session.number)
    }
    let feedback = {answer: req.session.feedback};
    res.render("index", feedback);
  });
  app.post('/check', function(req, res) {
    console.log("guess was "+req.body.number);
    let guess = req.body.number;
    console.log('After guess, session is ' +req.session.number)
    if (guess == req.session.number) {
      req.session.feedback = "You got it!";
    }
    else if (guess > req.session.number) {
      // console.log('too high!')
      req.session.feedback = "Too High!";
    }
    else {
      req.session.feedback = "Too Low!";
      // console.log('too low!')
    }
    res.redirect('/')
  });

};