const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
  
const middle = function(array){
    let result = []
    if(array.length <= 2){
      return []
    } 
    if (array.length % 2 === 0){
      return [array[array.length / 2 - 1] , array[array.length / 2]]
      
    }
    if (array.length % 2 === 1){
      return [array[Math.floor(array.length / 2)]]
    } 
  }
 

  module.exports = middle