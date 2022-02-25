// lecture 16 - js harry
// To create element 
let element = document.console.createElement(li);
// add a class name to it
element.className = 'list';
// element.id
// element.setAttributes('title', 'mytitle');

element.inneText = "Hello this is a created li element"
//This si the change
// add the created element to the HTML(DOM)
let ul = document.querySelector('ul.this')//selecting the container in which we need to add the created element 
ul.appendChild(element);

//getAttribute()
// ! var get = doucment.getElementById("myAnchor").getAttribute("target");
// hasAttribute(value); - it will check weather an element has that perticular attibute or not (True/False)
// ! var check = doucment.getElementById("Button").hasAttribute("onclick");
//removeAttribute()
// ! var remove = doucment.getElementById("myAnchor").removeAttribute("href");
//* replacewith() 