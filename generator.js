// Generator syntax 
/*
 function* name_of_function(){
    //code
 }
 */
 function* myGenerator() {
     //to pause the generator's execution we use 'yield' keyword.. 
     // so that we can access/generate values one by one.
    yield 1;
    yield 2;
}
let iterator = myGenerator();
let result;
do { 
result = iterator.next();
console.log(result);
} while (!result.done);
//Output:-
//{value: 1, done: false}
//{value: 2, done: false}
//{value: undefined, done: true}
//?--------------------------------------another Example
function* numberGenerator() {
    let i=0;
    //By this infinite while loop we can generate infinite values coz we the perameter to true which means the values will never stop to generate
    // done: [ true if we reach the end, else false]
    while(true){
        yield i++;
    }
}
const gen = numberGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// we can use console.log as many time as we want bcoz of infinte while loop