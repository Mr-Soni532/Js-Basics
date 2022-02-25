// basic syntax of
try {
  //? code that could prossibly through an error
} catch (e) {
  //? This code will be executed when the try block through an error
}

//!try catch throw
//where we have to give an error message to the user if anything goes out of order
try {
  throw new Error("This is an error");
} catch (error) {
  console.log(error);
  console.log("end of try-catch block");
}

//! Try , Catch & Finally
try {
  console.log("working statement");
  throw new Error("This statment throws an error");
} catch (error) {
  console.log("error has been handled");
} finally {
  console.log("Everything has been handled");
}
//?-------------------------------------
//Another example of Try, Catch & Finally
function f() {
  try {
    console.log(0);
    throw 'Hello';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false
//?-------------------------------------

//Example
try {
    null.console // it is a wrong syntax.. error
    console.log("We are inside try block");
    
    functionHarry();
    
} catch(error) {
    console.log(error) // it will directly give the proper error to the user with thhe name and the message 
    console.log("Are you okay?");
    console.log(error.name); // it will give the name of the error 
    console.log(error.message); // it will give the error message to the user 
    
} finally {
    console.log("Finally we will run this")
}