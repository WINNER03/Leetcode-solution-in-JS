/**You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

/**
 * @param {number[]} prices
 * @return {number}
 */




var maxProfit = function (prices) {
  const profit = { max: 0, buy: undefined };
  for (let i = 0; i < prices.length; i++) {
    if (profit["buy"] || profit["buy"] === 0) {
      if (profit["buy"] > prices[i]) {
        profit["buy"] = prices[i];
      } else if (profit["max"] < prices[i] - profit["buy"]) {
        profit["max"] = prices[i] - profit["buy"];
      }
    } else {
      profit["buy"] = prices[i];
    }
  }
  return profit.max
};

console.log(maxProfit([2,1,2,1,0,1,2]));




var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price if a lower price is found
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Update the maximum profit if a higher profit is found
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    } }

  return maxProfit;
};
