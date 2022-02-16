const middle = function(arr) {
  if (arr.length < 3) return [];

  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 ?
    arr.slice(mid, mid + 1) : // Odd
    arr.slice(mid - 1, mid + 1); // Even

};

module.exports = middle;

console.log(middle([1, 2,])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]