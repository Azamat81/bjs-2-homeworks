"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2 - 4 * a * c);
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  arr.push((-b + Math.sqrt(d) ) / (2 * a));
  arr.push((-b - Math.sqrt(d) ) / (2 * a));
  return arr;
}

solveEquation(4, 2, 8);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let n = countMonths;
  let S = amount - contribution;
  let monthlyFee = S * (P + (P / (((1 + P)**n) - 1)))
  let total = monthlyFee*countMonths;
  return parseFloat(total.toFixed(2));
}
calculateTotalMortgage(10, 0, 50000, 12)