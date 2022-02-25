console.log("This is tutorial 57");

// Maps in JavaScript: We can use any type of key or value
const myMap = new Map();

const key1 = "myStr",
  key2 = {},
  key3 = function () {};

// Setting map values
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function");
console.log(myMap);
//! we can directly use map like this also:
//? myMap.set(key, value)
//Example:- myMap.set('Dog', 'Woof'); Here Dog is the key and the "Woof" is the value
//  for (let [key, value] of myMap) {
//     console.log(key, value); //? Dog, Woof
// }

//!----------------------------------------
// Getting the values from a Map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
  console.log("key is ", key);
}
// Get only values
for (let value of myMap.values()) {
  console.log("value is ", value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
  console.log("Key is ", key);
  console.log("Value is ", value);
});

// Converting map to an array
let myArray = Array.from(myMap);
console.log("Map to array is ", myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Map to keys array is ", myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log("Map to values array is ", myValuesArray);


//!----------------------------------//-----------------------------//

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
