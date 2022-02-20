const assertEqual = require('./assertEqual')
  const eqArrays = function(a,b){
if(a.length !== b.length)
  return false
    for(let i = 0; i < a.length; i++ ){
      if(a[i] !== b[i])
        return false
    }
    return true
  }

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); 
  module.exports = flatten