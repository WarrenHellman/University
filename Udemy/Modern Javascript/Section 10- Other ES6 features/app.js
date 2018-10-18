//////////////////////////////////////////
//////// Iterators ///////////////////////
//////////////////////////////////////////

// const nameIterator = (names) => {
//   let nextIndex =0;

//   return {
//     next: function() {
//       return nextIndex < names.length ? 
//       { value: names[nextIndex++ ], done: false} :
//       { done: true}
//     }
//   }
// }

// // create array of names
// const namesArr = ['Jack', 'Jill', 'John']
// // Init iterator and pass names

// const names = nameIterator(namesArr);

// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())

//////////////////////////////////////////
//////// Generators //////////////////////
//////////////////////////////////////////

// Generator Example
function* sayNames(){
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

//ID Creator

function* createIDs() {
  let index = 0;

  while(true){
    yield index++;
  }
}

const get = createIDs();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());