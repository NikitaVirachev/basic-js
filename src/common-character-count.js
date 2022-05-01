const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount( s1, s2 ) {
  let str1 = s1;
  let str2 = s2;
  let commonCharacterCount = 0;

  for (let char of s1) {
    if (str2.includes(char)) {
      commonCharacterCount++;
      str2 = str2.slice(0, str2.indexOf(char)) + str2.slice(str2.indexOf(char) + 1);
    }
  }

  return commonCharacterCount;
}

module.exports = {
  getCommonCharacterCount
};
