const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight( arr ) {
  let arrToSort = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      resultArr.push(-1);
    } else {
      arrToSort.push(arr[i]);
      resultArr.push(null);
    }
  }

  arrToSort.sort( (a, b) => a - b );

  let j = 0;
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] != -1) {
      resultArr[i] = arrToSort[j];
      j++;
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};
