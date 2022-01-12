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
const assertArraysEqual = function(a,b){
 
if(eqArrays(a,b) === true){
  console.log("both are equal")
  } 
  else return console.log('this is not true')
}

assertArraysEqual([1, 2, 3] , [1, 2, 3])

assertArraysEqual([1, 3, 3] , [1, 2, 3])

/*const assertArraysEqual = function(a,b){
  if(a.length !== b.length)
    return false
      for(let i = 0; i < a.length; i++ ){
        if(a[i] !== b[i])
          return false
      }
      console.log("these two arrays are the same")
    }*/