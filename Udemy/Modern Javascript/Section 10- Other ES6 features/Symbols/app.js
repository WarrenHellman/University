// Create a symbol
const sym1 = Symbol()
const sym2 = Symbol('sym2')

// Creates Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {}
myObj[KEY1] = 'Prop1'
myObj[KEY2] = 'Prop2'
myObj.key3 = 'Prop3'
myObj.key4 = 'Prop4'

// Can be used as a key but they are not enumerable in a 'for in' loop

for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`)
}

//Symbols are ignored by JSON.stringify

console.log(JSON.stringify({key: 'prop'}))
