//Http status codes google search;
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("Button clicked");

  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //Open the object
  //! There are two types to request METHODS to open the object .. GET/POST
  // GET METHOD
  xhr.open("GET", "ajax.txt", true); // (METHOD, source, Async{true/false})

  // What to do on progress(optional)
  xhr.onprogress = function () {
    console.log("Processing...");
  };

  // What to do when response is ready
  xhr.onload = function () {
    //Http status codes google search;
    if (this.status === 200) {  
      console.log(this.responseText);
    } else {
        console.log('Something went wrong')
    }
  };
  // Send the request
  xhr.send();
  console.log("We are done!");
}

