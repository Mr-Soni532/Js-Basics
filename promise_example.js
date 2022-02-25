// Pretend that this data is comming from any server

const students = [
  { name: "Bhupender", subject: "JavaScript" },
  { name: "Chetan", subject: "Music" },
];

/*now we will make two functions 
1. enrollStudent() - it will add the new students to the exsisting list 
2. getStudent() - it will fetch the list of all enrolled students
*/
function enrollStudent(newStudent) {
  //create a new promise obj and return it
  return new Promise(function (resolve, reject) {
      // In setTimeout, we set that it will take 1 second to enroll stundent
    setTimeout(function () {
      students.push(newStudent);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve(); // this will run inside //! '.then'
      } else {
        reject(); // this will run inside //! '.catch'
      }
    }, 1000);
  });
}

function getStudent() {
  setTimeout(() => {
      // Here, we set that student list will be fetched after 5 seconds
      let str = ``;
    students.forEach(function (element) {
      str += `<li>${element.name}</li>`;
    });
    document.getElementById("list").innerHTML = str;
    console.log("Students have been fetched");
  }, 5000);
}

let newStudent = { name: "Rajan", subject: "Tattoo" };
/*
Now we pass the newStudent in enrollStudent function 
if student successfully got enrolled then resolve function will run , else reject function will run;
*/
enrollStudent(newStudent).then(getStudent).catch(function () { 
    console.log('Something went wrong!')
})
// 43 - 'getStudent' which is inside .then is basically //!resolve() function which we call in line 20
// and the function inside .catch will run when the reject funciton get called