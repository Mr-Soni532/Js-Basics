// With the help of destruturing we can make complex statements easier to read
let a, b;
[a, b] = [34, 564];
// console.log(a, b);
// Result: a = 34, b = 564;

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//! Here '...d' means all the reaming values will get assigned to d as an array
// console.log(a) : 1
// console.log(b) : 2
// console.log(c) : 3
// console.log(d) : [4,5,6,7,8,9,10,11,12,13]

// Array Destructuring
const fruits = ["Apple", "Bananas", "Mangoes"]; //? Here fruit is an array
[a, b, c] = fruits; //? Here assigning the array values to the a,b,c respectively
// console.log(a, b, c)
//? Result:
//  a = Apple,
//  b = Bananas
//  c = Mangoes

// Object Destructuring
({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
// console.log(a, b, c, d)
//? Result:
//  a = 34,
//  b = 345
//  c = 67
//  d = {d:45, e:34}

const laptop = {
  model: "HP Pavilion",
  ram: "8Gb",
  graphic: "Geforce 1650",
  start: function() {
    return { HDD: "1000 GB", SSD: "256 GB" };
  },
};

const { model, ram, graphic, start } = laptop;
console.log(model, ram, graphic, start());
start();
