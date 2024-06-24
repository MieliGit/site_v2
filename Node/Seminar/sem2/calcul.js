const NP = require("number-precision");

function calculateresultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => NP.plus(acc, purchase), 0);

  total = NP.times(total, discount);
  return total;
}

module.exports.calculateresultSum = calculateresultSum;
