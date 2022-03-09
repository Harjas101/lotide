const middle = require('../middle')
const assert = require('chai').assert;
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    console.log(middle([1, 2, 3]))
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
console.log(middle([1, 2, 3, 15, 20, 25, 10, 12, 13, 14, 15 ]))