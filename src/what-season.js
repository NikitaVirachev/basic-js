const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];
  
  if (date === undefined) return 'Unable to determine the time of year!';

  //if (!('getMont' in date)) throw new TypeError("Invalid date!");

  if (!(Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date))) {
    //console.log('Внутри: ' + date);
    throw new TypeError("Invalid date!");
  }
  //console.log('После: ' + date);
  return seasons[date.getMonth()];
}

module.exports = {
  getSeason
};
