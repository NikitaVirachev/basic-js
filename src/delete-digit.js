const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNumber = String(n);
  let max = 0;
  let newNum = 0;

  for (let char of strNumber) {
    newNum = +(strNumber.slice(0, strNumber.indexOf(char)) + strNumber.slice(strNumber.indexOf(char) + 1));
    if (newNum > max) max = newNum;
  }

  return max;
}

module.exports = {
  deleteDigit
};
