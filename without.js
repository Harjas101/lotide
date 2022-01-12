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
// a(is the source) b(is the itemsToRemove)
const without = function(a,b){
  for(let i =0 ; i < a.length; i++){
    if(b.includes(a[i]) ){
     a.splice(i,1)
    }
  }
return a
}
assertArraysEqual(without([1, 2, 3], [1]) , [2, 3])
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]