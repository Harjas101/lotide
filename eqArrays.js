const assertEqual = require('./assertEqual')
//   const eqArrays = function(a,b){
// if(a.length !== b.length){
//   return false
// }
//     for(let i = 0; i < a.length; i++ ){
//       if(a[i] !== b[i])
//         return false
//     }
//     return true
//   }
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
  module.exports = eqArrays;