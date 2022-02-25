//! Add script in html to access this file 
//This is formation of constructor 
function generalCar(gName, gspeed, gModel, gColor) {
    this.name = gName;
    this.speed = gspeed;
    this.model = gModel;
    this.color = gColor;
    //here 'this' keyword will be replace with the name of the object which is accessing the members of the constructor 
}
// Now we create a prototype to add a new values 
generalCar.prototype.Tyersize = function(tyreSize){
    console.log(tyreSize)
}


//now we make an objects of genrealCar with the help of 'new' keyword 
let car1 = new generalCar('Maruti 800', 100, 1999, 'white', 18);
console.log(car1)
