/**
 * Ticker data normalizer. We normalize the data from the original form of [[name, value]...]
 * to a hashMap of all the stock names with their corresponding data values.
 * @param updatedData
 * @param oldData
 * @returns {{}}
 */
export const normalizeTickerData = function(updatedData, oldData) {
  let normalizedData = {};

  updatedData.map(([stockName, value]) => {
    const oldValue = oldData.getIn([stockName, 'value']);
    normalizedData[stockName] = {
      value: value.toFixed(2)
    };
    if (oldValue) {
      normalizedData[stockName].hasIncreased = parseInt(value) > parseInt(oldValue);
    }
  });
  
  return normalizedData;
};