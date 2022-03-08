const eqArrays = require('./eqArrays')
const assertArraysEqual = function(a,b){
 
if(eqArrays(a,b) === true){
  console.log("both are equal")
  } 
  else return console.log('this is not true')
}
module.exports = assertArraysEqual;