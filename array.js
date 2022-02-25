// Way we can make an array
const marks = [23, 43, 54 ,34, 23];
const fruits = ['ORange', 'Apple', 'Pineapple'];
const mixed =  ['Str', 34, 54, [3,6]];

const arr = new Array(23, 234, 54, 'Banana');

console.log(arr);
console.log(fruits);
console.log(marks);
console.log(mixed);

// we can also access elements of array by index number 
console.log(fruits[1]);

// methods of array
let arr = [0,2,3,4,5];
// 1. arr.length - arr is array name 
// 2. Array.isArray(arr) - check whether arr is array or not.
// 3. arr.indexOf(4) - It will give the index value in which the digit 4 is present.
// 4. arr.join('symbol') - It will joins all elements of an array into a string
// 4. arr.push(45) - It will add 45 in the end of array 'arr'.
// 6. arr.pop() - It will remove the last element from array 'arr'.
// 7. arr.shift() - It will remove the first element of array 'arr'.
// 5. arr.unshift(45) - It will add 45 in starting of the array 'arr'.
// 8. arr.slice(1, 2) - start removing element from index 1 and remove total 2 elements including index 1.
// 8. arr.splice(index, count_to_remove, addElement1, addElement2, ....) - Work just as slice but it also can replace the elements.
// 9. arr.revers() - reverse array 'arr'.
// 10.arr.concat(arr2) - It will add the arr2 at the end of arr/
// arr.sort() - 
//  In order to print an array we use 
arr.forEach(function(element)
{console.log(element);});
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
Map()  //return a new array made from the return value from the callback for every item of the arry 
filter() // return new array containing the items for which callback returned true.
every() // return true if callback return true for every item in the array. 
some() // return true if callback return true for at least one item in the array. 
reduce() // reduce all the elements in the array into one value, which could be a string, number or object.
// For reduce //? https://www.youtube.com/watch?v=g1C40tDP0Bk
reduceRight() // work like reduce(), but start with the last element 
