const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {console.log(`Assertion failed: ${actual} !== ${expected}`) 
  }
  
  };
  //Create a function called countLetters.

  const countLetter = function (string) {
    let letterObject = {};
    let noSpaces = string.split(' ').join('');
    for (let letter of noSpaces) {
      if (letterObject[letter]) {
        letterObject[letter] += 1;
      } else {
        letterObject[letter] = 1;
      }
    }
      return letterObject
  };
  
  console.log(countLetter("lighthouse in the house"))