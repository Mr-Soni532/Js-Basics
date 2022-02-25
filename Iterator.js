/*It is an object that allows us to traverse over a list or collection. Iterators' purpose is to 
define the sequences and implement 
the iterator protocol that returns an object by using a next() method that contains the value and done.  */
function FruitsIterator(values) {
  let nextIndex = 0;
  return {
    next: function () {
      //using ternary operator instead if/else
      return nextIndex < values.length
        ? { value: values[nextIndex++], done: false }
        : { done: true };
    },
  };
}
// Initializing array with some values
const myArray = ["Apples", "Grapes", "Banana", "kiwi", "Mango"];
const fruits = FruitsIterator(myArray);
console.log(fruits.next().value); // It will give Apples, False
console.log(fruits.next().value); // It will give Grapes, False
console.log(fruits.next().value); // It will give Banana, False
console.log(fruits.next().value); // It will give Kiwi, False
console.log(fruits.next().value); // It will give Mango, False
console.log(fruits.next().value); //  True
