// Async function shown with timeout. 

// async function myFunc() {
//  

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error= true;

//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// // adding async returns a promise so it needs a .then and possibly a .catch

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));



//async await functions allow us to wait until asynchronous calls are executed before moving through to the next step. 


async function getUsers () {
  //awaits response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //only proceed when promise is resolved
  const data = await response.json();
  //only proceed with second promise is resolved
  return data;
}
// Here we run the function and the .then uses the returned data as an argument for a callback function that console logs the returned data
getUsers().then(users => console.log(users));