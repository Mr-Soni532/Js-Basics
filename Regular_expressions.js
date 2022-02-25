// //? Page content
// 1. Basic Regular Expressions
// 2. Regular Expression Methods
// 3. Meta Character in Regular Expression
// 4. Character sets - []
// 5. Quantifiers - {}
// 6. Groupings - ()
// 7. Shorthand characters 
// 8. Assertions
//------------------------------------------------------------------
/* Regular Expression methods like 
1.exec()
2.test()
--string--
3. match()
4. replace()
5. search()
6. split()
*/


//? There are two ways to define regular expression 
// 1. let regex = new RegExp('Expression_here')
// 2. /pattern/modifiers;
//?  -Two type of modifiers
     //! 'g' -> Global
     //! 'i' -> case Sensitive
//!-------------//------------//-------------//-------------//-------------//---------//-----
let reg = /Bhupender/;
let str = ' Hello World! this is bhupender, Bhupender  means king of kings!';
// 1. exec() - //!return an array for match or null for no match
let result = reg.exec(str);

//? We can also get the specific information from that matching element
// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() -//* Returns true or false
let result2 = reg.test(str);

// 3. match() - //* Return an array of results else null
//? While using match() or other string fucntions use 'reg' (Regular_Expression) as parameter
// let result3 = reg.match(s) ---> //! Wrong!!
let result3 = str.match(reg) // ---> //? Right

// 4. search() - //* Returns index of first match else -1
// let result4 = reg.search(s) ---> //! Wrong!!
let result4 = str.search(reg) // ---> //? Right

// 5. replace() -//* Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = str.replace(reg, 'Harry'); // (string, Replace with)

//6. split() -//* Return an array of split string... 
// When split function find the 'reg' inside the 'str' then it will delete the matched 'reg' and pass the rest items as an array
let result6 = str.split(reg);

// Another example of split 
function split_reg() {
    let reg = /,/;
    let str = 'Bhupender, Chetan, Rajan, Abhii, Ambar, Subham';
    let result = str.split(reg);
    console.log(result) // ['Bhupender', ' Chetan', ' Rajan', ' Abhii', ' Ambar', ' Subham'] --> Array
}
//  split_reg(); 

// -------------------//?----------------//------------------

//! Metacharacters in Regular Expressions:- 
https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-47

 /soni/;
// Lets look into some metacharacter symbols
 /^s/; // ^ means expression will match if string starts with this...
 /soni$/; // $ at the end of the string means "string ends with"
 /s.ni/; //matches any one character at the place of period '.'
 /s*ni/; //matches any 0 or more characters at place of astric '*'
 /s?ooni?i/; // character right after '?' is optional
 /h\*rry/; // '\' means the following metacharacter will act like a normal symbol character

 //?----------------//----------------//--------------//-----------//
 
//! Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // match any character after h which is NOT (a, t or y)
regex = /h[^aty]rr[yYu]/; // match any character after h which is NOT from (a, t or y) and match character after r which is from (a, u or y)
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

//! Quantifiers - We use {}
regex = /yel{2}ow/;  // Here 'l' must occur exactly 2 times
regex = /yel{0,2}ow/; // Here 'l' can occur between 0 to 2 (0 or 1 or 2) times


//! Shorthand Characters
//shorthand characters applied with backslash'\'

let reg = /\war/;     // \w measns word character - '_' or alphabet or numbers
reg = /\w+d1r/;       // \w+ means one or more word characters
reg = /\W hello/;       // \W Non word character
reg = /\W+bhai/;      // \W+ means more than one Non word character
reg = /number \d999/; // \d means digit
reg = /number \d+/;   // \d+ means more than one digit
reg = /\D999/;        // \D means non digit
reg = /\D+999/;       // \D+ means more than one non digit
reg = /\s hello/;  // \s means Match whitespace character
reg = /\s+hello/; // \s+ means match one or more than one whitespace characters
reg = /\Shello/;  // \S Match non whitespace character
reg = /\S+hello/; // \S+ Match one or more than one non whitespace character
reg = /4r5r\b/;       // word boundary


//! Assertions
reg = /b(?=h)/; // match where next character of b is h
reg = /b(?!h)/; // match where next character of b is not h 

