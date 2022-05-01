const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let DNSStats = {};
  let brokenDomain = [];
  let currentDomain = '';

  for (let domain of domains) {
    brokenDomain = domain.split('.');
    for (let i = brokenDomain.length - 1; i >= 0; i--) {
      currentDomain = currentDomain + '.' + brokenDomain[i];
      if (!(currentDomain in DNSStats)) DNSStats[currentDomain] = 0;
      DNSStats[currentDomain]++;
    }
    currentDomain = '';
  }

  return DNSStats;
}

module.exports = {
  getDNSStats
};
