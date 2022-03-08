const assertEqual = require('./assertEqual')
  const eqArrays = require('./eqArrays')
  const flatten = function(array) {
    let newArray = [];
    Array.forEach(function(element){
      if (Array.isArray(element)=== false){
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