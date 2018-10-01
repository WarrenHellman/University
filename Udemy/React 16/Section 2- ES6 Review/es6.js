/////////////////////////////////
///////// Classes ///////////////
/////////////////////////////////

// written in ES6

// class Human {
//   constructor() {
//     this.gender = 'male'
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = 'Warren'
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// rewritten with ES7

// this will throw an error 

// class Human {
//   gender = 'male'
//   printGender = () => {
//     console.log(this.gender)
//   }
// }

// class Person {
//   name = 'Warren'
//   printMyName = () => {
//     console.log(this.name);
//   }
// }


/////////////////////////////////
///////// Spread or Rest ////////
/////////////////////////////////

// Uses the operator ... 


// SPREAD
let oldArray = [1,2,3]
// the three dots will populate the new array with the values of teh old array and add a 1,2
const newArray = [...oldArray,1,2];

// Same here, creates a new object using the properties of the old object
const oldObj = {name: 'Warren', age: 34}
const newObj = {...oldObj, height: "70 inches"}

console.log(newArray)
console.log(newObj)

//REST

// used for functions. Here it takes the arguments and puts them in an array where they can be manipulated by array methods. 

const filter = (...args) => {
  return args.filter(el => el === 1);
}

/////////////////////////////////
///////// Destructuring  ////////
/////////////////////////////////

// extracts array elements or object properties to store as variables

[a,b] = ['Warren', 'Awesome']

// This declares 2 variables, a and b and assigns them to corresponding indices (a = Warren, b= Awesome)


//not supported here
// {name} = {name : "Warren", age: 34}

// console.log(name) // = Warren (creates a variable equal to the object key of the same name's value)

/////////////////////////////////
///////// Primitive vs Ref  /////
/////////////////////////////////

// Recall are primitive and some merely point to a referenced location (arrays and objects)
// If we have an object and create a new object using that as a value, any changes to the original will change the copy.

// To get around this, we can make a copy with spread. 

const numArray = [1,2,3,4]
const secondArray = [...numArray];

// Two distinct copies!

/////////////////////////////////
///////// Array Functions  //////
/////////////////////////////////

//mapping- returns a new array

const numbers = [1,2,3]

const doubleNumArray = numbers.map((num) => {
  return num*2;
})
