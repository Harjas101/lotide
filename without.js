const assertArraysEqual = require('./assertArraysEqual')

// a(is the source) b(is the itemsToRemove)
const without = function(a, b){
  let newArray =[]
  for(let i = 0 ; i < a.length; i++){
    if(!b.includes( a[i]) ){
     newArray.push(a[i])
    }
  }
return newArray
}
assertArraysEqual(without([1, 2, 3], [1]) , [2, 3])
//without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]);
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]))
module.exports = without