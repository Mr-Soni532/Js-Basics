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
