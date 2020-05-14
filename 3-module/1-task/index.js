/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let str = data
    .filter((obj) => obj.age <= age)
    .reduce((user, obj) => user + `${obj.name}, ${obj.balance}\n`,'')
    .slice(0, -1);

  return str;
}
