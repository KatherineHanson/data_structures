// 1.1 Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Loop over the string. 
// If curr variable is null, assign the current character to curr variable
// compare curr to each character subsequently looped over. 
// If a match is found, return true
// Otherwise, return false


function isUnique(str){
    var curr = null;
    var i;
    if (typeof str !== 'string' || str.length === 0) return false;
    else {
        if(curr === null) curr = str[i];
        for(i = 0; i < str.length; i++){
            str = str.slice(1, str.length)
            if (curr === str[i]){
                return false;
            }
        }
        return true;
    }
}

console.log('\'isUnique(\'hello\') should result in false:', isUnique('hello'));
console.log('\'isUnique(\'hi\') should result in true: ', isUnique('hi'));
console.log('\'isUnique(\'abcdefghijklmnopqrstuvwxyz\') should result in true: ', isUnique('abcdefghijklmnopqrstuvwxyz'));
console.log('\'isUnique(\'abcdefghijkalmnopqrstuvwxyz\') should result in false: ', isUnique('abcdefghijkalmnopqrstuvwxyz'));
console.log('\'isUnique(\'\') should result in false: ', isUnique(''));
console.log('\'isUnique(null) should result in false: ', isUnique(null));
