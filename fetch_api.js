//fetch api is the alternative of the XMLHTTPSREQUEST()

// //! General Syntax
// fetch(url) .then(response => {
//     //response data
// }) .catch(error => {
//     //handle errors
// })

// //! syntax for GET method 

fetch(url) 
.then(response => response.json()) // arrow function don't need {} in single return statement
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))

// //------------------------
// function getData(){
//   //  console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//       //  console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         // console.log("Inside second then")
//        console.log(data);
//     })
// }
// // console.log("Before running getData")
// // getData()
// // console.log("After running getData")

//! post method 

function postData(){
    url = "http://localhost:3000/user";
    data = '{ "FirstName": "abhii", "LastName": "arora", "UserName": "iosos", "Password": "hello1", "Email": "hello11@gmail.com" } '
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}
postData();