/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let count = 0;
  const string = String(n).split('');
  string.forEach((x, i) => {
    let Arr = string.slice();
    Arr.splice(i, 1);
    Arr = Arr.join('');
    if (Arr > count) {
      count = Arr;
    }
  });
  return Number(count);
}

module.exports = deleteDigit;
