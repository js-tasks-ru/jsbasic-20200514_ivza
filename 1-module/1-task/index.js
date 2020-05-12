/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  for (var fact = 1; n > 1; fact *= n, n--) ;

  return fact;
}
