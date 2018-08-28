function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  return data;
}    
// ************CHANGES HERE **************
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");
}
//***************** END CHANGES **********************
function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.




// Assignment: Fib + Nacci
// The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.

// Using Closures, make the Fib function with the following specifications:

function fib() {
  let nacciNum1 = 0
  let nacciNum2 = 0
  let currentNum = 0;
  
  function nacci() {
    nacciNum1 = nacciNum2;
    nacciNum2 = currentNum;
    currentNum = nacciNum1 + nacciNum2;
    if (currentNum === 0) {
      currentNum = 1;
    }
    console.log(currentNum);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"