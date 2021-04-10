/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, znach) {
  let start = 0;
  let rtn = 0;
  let end = arr.length;
  let zn = Math.floor((start + end) / 2);
  while (rtn === 0) {
    if (arr[zn] !== znach) {
      if (znach < arr[zn]) {
        end = zn;
      } else {
        start = zn;
      }
      zn = Math.floor((start + end) / 2);
    }
    if (arr[zn] === znach) {
      rtn = arr[zn] - arr[0];
    }
  }
  return znach - arr[0];
}

module.exports = findIndex;
