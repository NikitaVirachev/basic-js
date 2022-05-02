const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  if (names.length === 0) return names;
  
  let renameFilesArr = [];
  let numberRepetitions = {};
  renameFilesArr.push(names[0]);
  numberRepetitions[names[0]] = 0;

  for (let i = 1; i < names.length; i++) {
    if (renameFilesArr.includes(names[i])) {
      numberRepetitions[names[i]]++;
      renameFilesArr.push(names[i] + '(' + numberRepetitions[names[i]] + ')');
      numberRepetitions[renameFilesArr[renameFilesArr.length - 1]] = 0;
    } else {
      renameFilesArr.push(names[i]);
      numberRepetitions[names[i]] = 0;
    }
  } 

  return renameFilesArr;
}

module.exports = {
  renameFiles
};
