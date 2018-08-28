// const sayHello = function(){
//   console.log('Hello');
// }

// sayHello();

//Arrow Function Version

// const sayHello = () => {
//   console.log('Hello');
// }

// sayHello();


// One Line function doesn't need braces
// const sayHello = () => console.log('Hello');


//One Line returns
// const sayHello = () => 'Hello'

// Same as 
// const sayHello = function() {
//   return 'Hello';
// }

// To return object literals, wrap in parentheses so it don't get confused.

// const sayHello = () => ({ msg: 'Hello' })

// Adding parameters to function. Single Param doesn't need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Wazza', 'Homeboy');

//Arrow functions and callbacks

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// })

//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// })

// Shortest
const nameLengths = users.map(name => name.length)

console.log(nameLengths);

// More examples in Fetch section, cleand up JS there