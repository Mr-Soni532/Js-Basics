//Syntax
/*when we create a new object of promise then we send two parameter 
1. 'resolve' which will run when the promise is complete or all goes right 
2. 'reject' which will run when the promise got rejected or some error occure
*/
let myPromise = new Promise(function (resolve, reject) {
  const x = "HelloWorld";
  const y = "HelloWorld";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});
// function inside '.then' run as - resolve()
// function inside '.catch' run as - reject()
myPromise.then(function () {
    console.log('Success,  promise resolve')
}).catch(function () {
    console.log('Sorry! Promise rejected')
})
