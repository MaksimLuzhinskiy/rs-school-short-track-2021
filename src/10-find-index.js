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
  let end = arr.length - 1;
  let middle = Math.floor((arr.length - 1) / 2);
  let index;
  if (arr[start] === znach) return start;
  if (arr[end] === znach) return end;
  while (!index) {
    if (arr[middle] === znach) {
      index = middle;
    } else if (arr[middle] < znach) {
      start = middle + 1;
      middle = Math.floor((end + start) / 2);
    } else {
      end = middle - 1;
      middle = Math.floor((end + start) / 2);
    }
  }
  return index;
}

module.exports = findIndex;
