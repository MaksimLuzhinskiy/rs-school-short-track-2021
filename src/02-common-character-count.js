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
function getCommonCharacterCount(a1, a2) {
  const stroke1 = a1.split('');
  const stroke2 = a2.split('');
  let i = 0;
  stroke1.forEach((x) => {
    let id = stroke2.indexOf(x);
    if (id !== -1) {
      stroke2.splice(id, 1);
      i++;
    }
    id = stroke2.indexOf(x, id + 1);
  });
  return i;
}

module.exports = getCommonCharacterCount;
