const NodeCache = require('node-cache');
const { getExchangeRate } = require('./apiServices');

const currencyCodes = {
  USD: 840,
  EUR: 978,
};

const myCache = new NodeCache({ stdTTL: 3600000 });

const getExRate = async (currency) => {
  let exchangeRates = await myCache.get('currencies');

  if (exchangeRates) {
    return findRate(JSON.parse(exchangeRates), currency);
  }

  const data = await getExchangeRate();
  myCache.set('currencies', JSON.stringify(data));
  return findRate(data, currency);
};

const findRate = (data, currency) => {
  return data?.find((el) => el.currencyCodeA === currencyCodes[currency]);
};

module.exports = {
  getExRate,
};
