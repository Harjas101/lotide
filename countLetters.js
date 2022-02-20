const assertEqual = require('./assertEqual')
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
  
  module.exports = countLetter