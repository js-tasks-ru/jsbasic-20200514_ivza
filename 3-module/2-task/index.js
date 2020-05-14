/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numArr = str
    .split(' ')
    .join(',')
    .split(',')
    .map(val => parseFloat(val))
    .filter(val => !Number.isNaN(val));

  return {
    min: Math.min(...numArr),
    max: Math.max(...numArr)
  };
}
