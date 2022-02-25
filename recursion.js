function foo(i) {
    if (i < 0)
      return; // it will retun the i = -1 to its base statement, means where it comes from.. which is from line 5
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
    //! default return at the end of the function
  }
  foo(3);
  
  // Output:
  
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0 //? when the if condition retun then i = -1 goes back from where it return , it returned from i = 0 
  // end: 1 //? after printing 0 it hit the default return and 'i' will return to its previous value which is 1
  // end: 2 //? after printing 1 it hit the default return and 'i' will return to its previous value which is 2 and so on......
  // end: 3
  