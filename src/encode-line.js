const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let line = '';
  let countChar = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      countChar++;
    } else {
      if (countChar != 1) {
        line = line + countChar + str[i];
      } else {
        line = line + str[i];
      }
      countChar = 1;
    }
  }

  return line;
}

module.exports = {
  encodeLine
};
