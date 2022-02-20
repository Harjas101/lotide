const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {console.log(`Assertion failed: ${actual} !== ${expected}`) 
  }
  
  }
  const eqArrays = function(a,b){
if(a.length !== b.length)
  return false
    for(let i = 0; i < a.length; i++ ){
      if(a[i] !== b[i])
        return false
    }
    return true
  }

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
