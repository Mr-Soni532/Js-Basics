//! HashMap ---------------
let string = "dog fish cat dog";
let pattern = "abba";
function check(string, pattern) {
  string = string.split(" ");
  //New hashMap for storing the patten[i] and string[i] as (key, value) pairs;
  let hashMap = new Map();
  //!
  let arr = [];
  //If the length of string and pattern is not same then return false;
  if (string.length != pattern.length) return false;
  for (let i = 0; i < string.length; i++) {
    if (hashMap.has(pattern[i]) && hashMap.get(pattern[i]) != string[i]) {
      return false;
    }
    //check if the string[i] is already paired with any key or available in tom
    if (arr.includes(string[i]) && !hashMap.has(pattern[i])) {
      return false;
    }
    hashMap.set(pattern[i], string[i]);
    arr.push(string[i]);
  }
  return true;
}
// console.log(check(string, pattern));

//! Obj instead HasMap -------------------------
let string = "dog fish cat dog";
let pattern = "abba";
function check(string, pattern) {
  string = string.split(" ");
  //New hashMap for storing the patten[i] and string[i] as (key, value) pairs;
  let obj = {};
  //!
  let arr = [];
  //If the length of string and pattern is not same then return false;
  if (string.length != pattern.length) return false;
  for (let i = 0; i < string.length; i++) {
    if (obj[pattern[i]] && obj[pattern[i]] != string[i]) {
      return false;
    }
    //check if the string[i] is already paired with any key or available in tom
    if (arr.includes(string[i]) && !obj[pattern[i]]) {
      return false;
    }
    obj[pattern[i]] = string[i];
    arr.push(string[i]);
  }
  return true;
}
// console.log(check(string, pattern));
