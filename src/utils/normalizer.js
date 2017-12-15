import moment from 'moment';

/**
 * Ticker data normalizer. We normalize the data from the original form of [[name, value]...]
 * to a hashMap of all the stock names with their corresponding data values.
 * @param updatedData
 * @param oldData
 * @returns {{}}
 */
export const normalizeTickerData = function(updatedData, oldData) {
  let normalizedData = oldData.toJSON();

  updatedData.map(([stockName, value]) => {
    value = parseInt(value);
    const oldValue = oldData.getIn([stockName, 'value']);
    if (!normalizedData[stockName]) {
      normalizedData[stockName] = {
        value: value.toFixed(2)
      };
    } else {
      normalizedData[stockName].value = value.toFixed(2);
    }
    if (oldValue !== value) {
      normalizedData[stockName].hasIncreased = oldValue ? value > parseInt(oldValue) : undefined;
      normalizedData[stockName].lastUpdatedAt = moment(normalizedData[stockName].updatedAt).format('hh:mm:ss');
      normalizedData[stockName].updatedAt = new Date();
    }
  });
  
  return normalizedData;
};