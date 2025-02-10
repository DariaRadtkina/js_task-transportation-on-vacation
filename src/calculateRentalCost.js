/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;

  if (days < SHORT_TERM) {
    return days * COST_DAY;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * COST_DAY - SHORT_TERM_SALE;
  }

  return days * COST_DAY - LONG_TERM_SALE;
}

module.exports = calculateRentalCost;
