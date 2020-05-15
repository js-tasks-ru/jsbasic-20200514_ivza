/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str
    .split('-')
    .reduce((newStr, str, index) => {
      return index === 0 ? newStr = str : newStr += str[0].toUpperCase() + str.slice(1);
    }, '');
}
