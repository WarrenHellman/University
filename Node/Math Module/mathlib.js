module.exports = function(){
  return {
    adds: function(num1, num2){
      console.log(num1+num2);
    },
    multiply: function(num1, num2){
      console.log(num1*num2);
    },
    square: function(num1){
      console.log(num1*num1);
    },
    random: function(num1, num2){
      console.log(Math.floor(Math.random()*10+1))
    }
  }

}