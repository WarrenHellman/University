// Maps - Key Value pairs, can use any type as key or value

const map1 = new Map();

// Set Keys
const key1= 'some string',
      key2 = {},
      key3 = function(){};

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key

console.log(map1.get(key1), map1.get(key2), map1.get(key3))

console.log(map1.size)

//Iterating through maps

// Loop using for...of to get keys and values

for (let [key,value] of map1){
  console.log(`${key} = ${value}`)
}

//Iterate keys only
for (let key of map1.keys()){
  console.log(key)
}

for (let value of map1.values()){
  console.log(value)
}

map1.forEach(function(value, key){
  console.log(`${key} = ${value}`)
})

///Convert to an array

//Create an array of key value pairs

const keyValArr = Array.from(map1)

console.log(keyValArr);

//Create array of just keys

const valArr = Array.from(map1.keys())

console.log(valArr);

//Create array of just values

const valsArr = Array.from(map1.values())

console.log(valsArr);
