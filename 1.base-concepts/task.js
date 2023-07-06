"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

solveEquation(1, 5, 4);
solveEquation(1, 2, 1);
solveEquation(1, 2, 10)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let S = amount - contribution;
  let monthPayment = S * (monthPercent + (monthPercent / ((Math.pow(1 + monthPercent, countMonths)) - 1)));
  let mustPay = parseFloat((monthPayment * countMonths).toFixed(2));

  return mustPay;
}
calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 20000, 48);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);