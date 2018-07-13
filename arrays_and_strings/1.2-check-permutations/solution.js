// 1.2 Check Permutations:
// Given two strings, write a method to decide if one is a 
// permutation of the other.

// Create array holding all permutations of string 1
  // To create array of permutations of string 1,
  // 
// Loop over array holding string 1 permutations, 
// comparing string 2 to each element in the array
// If a match is found, return true
// If a match is not found, return false

var checkPermutations = function (str1, str2) {
    var i;
    var permutation = '';
    var permutations = [str1];
    var length = str1.length;

    for (i = 0; i < length; i++){
      permutation+=str1[i];
      console.log(permutation);
    }
    permutations.push(permutation);
    console.log(permutations);
}

checkPermutations('hello', 'goodbye');

var a = 
['hello','ehllo','elhlo','ellho',
'elloh','leloh','lleoh','lloeh',
'llohe','llohe','lolhe','lohle',
'lohel','olhel','ohlel','ohell',
'ohell','hoell','heoll','helol','hello']