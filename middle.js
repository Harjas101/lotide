const eqArrays = function(a,b){
  if(a.length !== b.length)
    return false
      for(let i = 0; i < a.length; i++ ){
        if(a[i] !== b[i])
          return false
      }
      return true
    }
  const assertArraysEqual = function(a,b){
   
  if(eqArrays(a,b) === true){
    console.log("both are equal")
    } 
    else return console.log('this is not true')
  }

  const middle = function(array){
    let result = []
  /* if arrays are less than 2 return as an empty array */
  //num % 2 === 0
if(array.length  > 2){
  console.log()
  return result
}
  /* if arrays is an odd number of arrays i would like to return the middle one [1.2.3.4.5.6.7]*/
  if(array.length % 2 !== 0){
    //divide the total array by 2 and then round up 
    let index = array.length % 2
    let i = Math.round(index)
    result.push(array[i])
    return result 
  }
  /* if arrays are even return the two middle arrays*/ 
    if (array.length % 2 === 0){
      //would like middle two elements
      let l1 = array.length % 2 
      let l2 = l1 - 1
      return result.push(l1, l2)
    
    }
  }
  
  console.log(middle([1, 2, 3, 4, 5, 6]))