// Async function always return a promise 


async function Demo(){
    console.log('Inside Demo function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling Demo")
let a = Demo();
console.log("After calling Demo")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")

//!flow control (Remove comments before reading)
/*
1. Before calling Demo
2. Inside Demo function .. then it will find await and then it will come out of the Demo fucntion  
3. After calling Demo
4. Promise {<Pending>}.. Because the fetch funcition is in await..pending 
-- Last line of this js file .. now after reaching the last line of the file it will go back to the first await to check whether the file is fetched or not 
5. Before response .. Now when the file is fetched then it will wait for the another response 
6. Users resolved .. because the second await is resolved 
7.then return the user and print it by line //!  17 
*/ 
