// syntax
const demo = new Set(['iterable']);

//! Methods
demo.add("value");
demo.delete("value");
demo.clear();
demo.entries();
demo.has("value");  //return true/false on check
demo.values(); // return all values form set in same insetion order
demo.keys();
demo.size;

//****************
const mySet = new Set();
mySet.add('Hello');
mySet.add('Hello1');
mySet.add('Hello2');
mySet.add(69);
console.log(mySet)
//************* 

let mySet2 = new Set([1, 'hello', 2, {sex:'yes'}, 'this'])
console.log(mySet2)

// Iterating a set using for-of loop
for(let item of mySet2){
    console.log(item)
}
//! we can also convert a set into an ARRAY 