// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(n) {
  // let mathalyzer = Math.floor(Math.random()*10)
  let arr= [];
  for (let i=0; i<n; i++) {
    arr[i]=Math.floor(Math.random()*10);
  }
  console.log(arr)
}
create_dummy_array(5);

/////////////////////////////////////////////////
////////////////JS Intermediate//////////////////
/////////////////////////////////////////////////


// Create a function called starString() that takes a number and returns a string of that many *. For example:

function starString(n, input) {
  let stars = "";
  while (0<n){
    stars += input;
    n--;
  }
  console.log(stars);
}


function drawStars(arr) {
  for (let i=0; i<arr.length; i++){
    if (typeof arr[i]=="number"){
      starString(arr[i], '*');
    }
    else if (typeof arr[i]== 'string'){
      let letter = arr[i][0].toLowerCase();
      starString(arr[i].length, letter)
    }
  }
}
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

drawStars(x);

// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function roster(arr) {
  for (let i=0; i<arr.length; i++){
    console.log("Name: "+arr[i].name+", Cohort:"+arr[i].cohort)
  }
}

// roster(students)

// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function businessRoster(obj){
  console.log('Employees')
  for (let i=0; i<obj.employees.length; i++){
    console.log(i+1+' - '+obj.employees[i].last_name.toUpperCase()+", "+obj.employees[i].first_name.toUpperCase()+" - "+(obj.employees[i].first_name.length+ obj.employees[i].last_name.length))
  }
  console.log('Managers');
  for (let i=0; i<obj.managers.length; i++){
    console.log(i+1+' - '+obj.managers[i].last_name.toUpperCase()+", "+obj.managers[i].first_name.toUpperCase()+" - "+(obj.managers[i].first_name.length+ obj.managers[i].last_name.length))
  }
}

// businessRoster(users)

// 1 - JONES, MIGUEL - 11

/////////////////////////////////////////
//////////Hoisting///////////////////////
/////////////////////////////////////////


// console.log(example);
// let example = "I'm the example!";  

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//1. returns undefined
// console.log(hello);   
// var hello = 'world';     

//2. // prints 'magnet'
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//3. // prints 'super cool'
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//4. Print Chicken then half chicken
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//5. mean has neot been defined when invoked
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//6. Prints undefined, then rock, then r&b then disco
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//7. Prints san jose, seattle, burbank and san jose
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

//8 - Bonus ES6: const. Returns and object {name: "Chicago", students: "65", hiring: true}, error type change to string 
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }