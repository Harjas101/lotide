const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')

const letterPositions = function(sentence) {
  const result = {};
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !== ' ' && result[sentence[i]]){
      result[sentence[i]].push(i)
    } else if (sentence[i] !== ' '){
      result[sentence[i]] = [i];
    }
  }
  return result;
};
console.log(letterPositions("lighthouse in the house"));
 console.log(letterPositions("hello"));
 module.exports = letterPositions