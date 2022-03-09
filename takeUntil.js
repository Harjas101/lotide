const takeUntil = function(array, callback) {
// array.indexOf(callback)
// return array.indexOf(callback)
let newArray = []
for(i = 0; i < array.length; i++ ){

  if (callback(array[i])){
    return newArray
    }
    newArray.push(array[i]) 
    }
  return newArray 
}
console.log(takeUntil([1, 2, 5, 7, 2, 1, 2, 4, 5], x => x < 0));

module.exports = takeUntil
