/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const g = str.split('').slice();
  let newG = [];
  let znach = g[0];
  let col = 1;
  for (let i = 1; i <= g.length; i++) {
    if (znach !== g[i]) {
      if (col !== 1) {
        newG.push(col);
      }
      newG.push(znach);
      znach = g[i];
      col = 1;
    } else {
      col++;
    }
  }
  newG = newG.join('');
  return String(newG);
}

module.exports = encodeLine;
