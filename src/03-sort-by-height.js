/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a1) {
  const stroke = a1;
  const newArray = a1.filter((x) => x !== -1);
  newArray.sort((a, b) => a - b);
  let i = 0;
  a1.forEach((x, index) => {
    if (x !== -1) {
      stroke[index] = newArray[i];
      i++;
    }
  });
  return stroke;
}

module.exports = sortByHeight;
