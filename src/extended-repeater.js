const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let repeaterStr = String(str);
  let separatorStr = '';
  let additionSeparatorStr = '';
  let additionStr = '';
  let resultStr = '';

  if (!('repeatTimes' in options) && !('additionRepeatTimes' in options)) {
    return repeaterStr + String(options.addition);
  }

  if ('additionSeparator' in options) {
    additionSeparatorStr = options.additionSeparator;
  } else {
    additionSeparatorStr = '|';
  }

  if ('addition' in options && 'additionRepeatTimes' in options) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionStr += String(options.addition) + additionSeparatorStr;
    }
    additionStr += String(options.addition);
  } else if (('addition' in options) && !('additionRepeatTimes' in options)) {
    additionStr = String(options.addition);
  }

  if ('separator' in options) {
    separatorStr = options.separator;
  } else {
    separatorStr = '+';
  }

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    resultStr += repeaterStr + additionStr + separatorStr;
  }
  resultStr += repeaterStr + additionStr;

  return resultStr;
}

module.exports = {
  repeater
};
