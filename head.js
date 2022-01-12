const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {console.log(`Assertion failed: ${actual} !== ${expected}`) 
  }
  
  };
  
  const head = function(banana){
    return banana[0]
  }

  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Jello", "Lighthouse", "Labs"]), "Hello");