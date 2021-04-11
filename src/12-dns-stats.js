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
function getDNSStats(domains) {
  const map = new Map();
  const arrt = [];
  const ob = {};
  domains.forEach((x) => {
    arrt.push(x.split('.').reverse());
  });
  arrt.forEach((x) => {
    x.forEach((y, index) => {
      let b = [];
      for (let i = 0; i <= index; i++) {
        b.push(`.${x[i]}`);
      }
      b = b.join('');
      if (map.get(b) === undefined) {
        map.set(b, 1);
      } else {
        map.set(b, map.get(b) + 1);
      }
    });
  });
  map.forEach((value, key) => {
    ob[key] = value;
  });
  return ob;
}

module.exports = getDNSStats;
