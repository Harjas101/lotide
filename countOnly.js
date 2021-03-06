const assertEqual = require('./assertEqual')
  // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const countObject = {};
  //loop through object's keys
  for (let key of allItems) {
  //check if key is true  
    if (itemsToCount[key]) {
      if (countObject[key]) {
        countObject[key] += 1;
      } else {
        countObject[key] = 1
      }
    }    
  }
  return countObject
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
module.exports = countOnly