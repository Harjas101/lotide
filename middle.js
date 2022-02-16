const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
  
const middle = function(array){
    let result = []
    if(array.length <= 2){
      return []
    } 
    if (array.length % 2 === 0){
      return [array[array.length / 2 - 1] , array[array.length / 2]]
      const middleNumber = array.length / 2
      console.log('Middle number is', middleNumber)
      const secondMiddleNumber = middleNumber -1
      console.log('second middle number is', secondMiddleNumber)
      const both = [array[secondMiddleNumber], array[middleNumber]]
      console.log('both middle numbers are', both)
      // if arrays are even return the two middle arrays
      // divide the length 
    }
    if (array.length % 2 === 1){
      return [array[Math.floor(array.length / 2)]]
      /*const middleArr = array.length / 2
      const abc = Math.floor(middleArr)
      const bbb = [array[abc]] */ 

      //line 58 is refactor of 58 to 60
     console.log('array has an odd number of ', bbb)
    } 
  }
  //if arrays are less than 2 return as an empty array
  // if arrays is an odd number of arrays i would like to return the middle one
  // if arrays are even return the two middle arrays
  console.log(middle([1, 2, 3, 15, 20, 25, 10, 12, 13, 14, 15 ]))

  module.exports = middle