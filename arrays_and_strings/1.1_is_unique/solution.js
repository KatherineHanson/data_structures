// 1.1 Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Loop over the string. 
// If curr variable is null, assign the current character to curr variable
// compare curr to each character subsequently looped over. 
// If a match is found, return true
// Otherwise, return false

function isUnique(str){
  if (typeof str !== 'string' || str.length === 0) return false;
  var i, x;
  str = str.split(' ').join('');
  for(i = 0; i < str.length; i++){
    for(x = i + 1; x < str.length; x++){
      if(str[i] === str[x])
        return false;
    }
  }
  return true;
}

console.log('no input should be false: ', isUnique());
console.log('blank string should be false: ', isUnique(''));
console.log('a should be true: ', isUnique('a'));
console.log('3 should be false: ', isUnique(3));
console.log('canary should be false: ', isUnique('canary'));
console.log('a golden afternoon should be false: ', isUnique('a golden afternoon'));
console.log('robin should be true: ', isUnique('robin'));
console.log('i luv egs should be true: ', isUnique('i luv egs'));
