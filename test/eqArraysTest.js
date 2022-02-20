const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
});
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); 