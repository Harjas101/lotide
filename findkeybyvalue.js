const assertEqual = require('./assertEqual')
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  const findKeyByValue  = (obj,value) => {
    for (const style in obj) {
      if (obj[style] === value) {
        return style;
      }
    }
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  module.exports = findKeyByValue