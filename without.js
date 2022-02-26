const assertArraysEqual = require('./assertArraysEqual')

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
module.exports = without