const takeUntil = function(array, callback) {
array.indexOf(callback)
return array.indexOf(callback)
}
//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);

 //const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 //const results2 = takeUntil(data2, x => x === ',');
 //console.log(results2);





 // [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]