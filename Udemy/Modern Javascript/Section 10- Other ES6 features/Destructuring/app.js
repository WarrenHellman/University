// Destructuring
// Very useful to unpack variabel from an array, with React

let a, b;
[a,b] = [100, 200];

// Rest pattern
//here a and b get mapped, the rest are put in an array called rest
[a,b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest)
//works for objects too
({a, b})= { a: 100, b: 200, c: 300, d: 400}
({a, b, ...rest})= { a: 100, b: 200, c: 300, d: 400}
console.log(rest)

// Array Destructuring

const people = ['John', 'Beth', 'Mike']

const [person1, person2, person3] = people

//Parse array returned from function

function getPeople(){
  return ['John', 'Beth', 'Mike']
}
let person1, person2, person3
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3)

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello')
  }
}

// Old ES5 way
const name = person.name,
  age = person.age,
  city = person.city;

// New ES6 way
const {name, age, city, gender, sayHello} = person;