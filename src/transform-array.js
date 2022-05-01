const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let transformArr = [];
  
  if (!Array.isArray(arr)) throw new TypeError("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--discard-prev') {
      if (i != 0 && arr[i-2] != '--discard-next') transformArr.pop();
    } else if (arr[i] == '--double-next') {
      if (i != arr.length - 1) transformArr.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev') {
      if (i != 0 && arr[i-2] != '--discard-next') transformArr.push(transformArr[transformArr.length - 1]);
    } else {
      transformArr.push(arr[i]);
    }
  }

  return transformArr;
}

module.exports = {
  transform
};
