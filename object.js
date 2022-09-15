let car = {
    engine: '20L',
    paint: 'black',
    'tyre': 'mrf', // ' 'just for example 
    isWOrk: true,
    array: [3,4,5,6,3]
}

console.log(car);
console.log(car['tyre']);
console.log(car.paint);
console.log(car.array);

// loop to print object
//used '${key}' to make it loook good
for(let key in car)
{
    console.log('${key} is ${obj[key]}');
}


//!------| Dot Notation |
/* We use Dot notation when we want to access the particular key form the obj.. and we are very well aware of the key-- just like we know in which structure data is comming

-> When we use dot notation we get either the value if the key is present or we get the undefined if the key is not present in the obj.
*/

//!------| Big brackets '[ ]' |
/* 
-> If the value inside [ ] is string itself then the complier will go straight into the obj and check for the key instead searching it in the codebase.

-> If the value inside the [ ] "is not a string itself" then it will check the whole 
codebase to access the variable and get its value and replace the variable with it's value and then the compiler will get the key and search it in the obj.

-> if the key is present in the obj then we get it's value else we will get undefined for that. 
*/