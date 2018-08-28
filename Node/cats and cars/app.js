// `${cars}`
// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    let dotSplit = request.url.split('.')
    let slashSplit = request.url.split('/')
    let contentType;
    let path = request.url;
    let endRoute;
    if (split.length === 2){
      path = split[0];
      endRoute = split[1];
      if (endRoute === 'css'){
        contentType = 'text/css'
        console.log("Path: "+path+" Content Type: "+contentType)
        runRoute(path, contentType)
      }
      else {
        contentType = 'image/'+`.${endRoute}`
        console.log("Path: "+path+" Content Type: "+contentType)
        runImgRoute(path, contentType)
      }
    }
    else {
      contentType = 'text/html'
      let route = 
      runRoute(path, contentType)
    }
    
    function runRoute(path, contentType) {
      fs.readFile(path,'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': contentType});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
        });
    }
    function runImgRoute(path, contentType) {
      fs.readFile(path, function (errors, contents){
          response.writeHead(200, {'Content-Type': contentType});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
        });
    }
  

    // // this is how we do routing:
    // if(request.url === '/cars') {
    //     fs.readFile('cars.html', 'utf8', function (errors, contents){
    //         response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
    //         response.write(contents);  //  send response body
    //         response.end(); // finished!
    //     });
    // }
    // else if (request.url ==='/cats') {
    //   fs.readFile('cats.html', 'utf8', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // else if (request.url ==='/cars/new') {
    //   fs.readFile('form.html', 'utf8', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // else if (request.url ==='/images/cat1.jpg') {
    //   fs.readFile('./images/cat1.jpg', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // else if (request.url ==='/images/cat2.jpg') {
    //   fs.readFile('./images/cat2.jpg', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // else if (request.url ==='/images/car1.jpg') {
    //   fs.readFile('./images/car1.jpg', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // else if (request.url ==='/images/car2.jpg') {
    //   fs.readFile('./images/car2.jpg', function (errors, contents){
    //     response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
    //     response.write(contents);  //  send response body
    //     response.end(); // finished!
    //   });
    // }
    // // request didn't match anything:
    // else {
    //     response.writeHead(404);
    //     response.end('File not found!!!');
    // }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");