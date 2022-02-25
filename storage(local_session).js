//LocalStorage save data in browser.. It can be used as long as we want..
 //SessionStroge is just like LocalStorge, but it cannot be used once the browser is turned off
 localStorage.setItem('Name', 'Hary'); // Insert values in local storage
 let name = localStorage.getItem('Name');
 //! localstorge.clear() - clear local store/reset
 // to remove perticular item 
 //! localstorge.removeItem('Name');

//  ? we cannot store an array as an array.. If we try to store an array then it will be converted in a string 
// however in order to store an array as an array we need to use some JSON.
localStorage.setItem('list', JSON.stringify('myArray')) // first we use //!'JSON.stringify' it receive object and retur string 
let myList = localStorage.getItem('list');
myList = JSON.parse(myList) // we use //! JSON.parse() it will convert a string into an array

