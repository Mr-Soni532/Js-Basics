//In arrow function we use '=>' key instead 'function'
// Arrow functions are hardly for one liners

//normal funciton
let addition = function (x, y) {
  return x + y;
};
console.log(addition(10, 10));

//arrow function 
let addition = (x,y) => x+y;
// In arrow function when we have only one return type then we dont use curly braces.
console.log(addition(10, 10));

//! Another example of arrow function 

// with using return statement 
let greet = () => {
    return 'Hello World!'
}

//without using the return statement 
let greet = () => 'Hello World!';

//! Return object in arrow function

const greet = () => ({name: 'Bhupender'});

//! single parameters doesn't require parentheses'()'

const greet = name => 'Good Morning' + name;

