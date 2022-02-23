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
  const flatten = function(array) {
    let newArray = [];
    array.forEach(function(element){
      if (array.isArray(element)=== false){
        newArray.push(element);
      } else {
        for (let i = 0; i < element.length; i++) {
          newArray.push(element[i]);
        }
      }
    });
    return newArray;
   };
  
   module.exports = flatten