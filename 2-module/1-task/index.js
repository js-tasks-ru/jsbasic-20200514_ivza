/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(obj) {
  if (!obj) return 0; 

  return Object.values(obj)
  	.filter(val => typeof val === 'number')
  	.reduce((sum, val) => sum + val, 0);
}
