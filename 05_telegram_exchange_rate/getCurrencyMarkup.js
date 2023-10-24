const getCurrencyMarkup = (currency, rate) => {
  const sell = rate.rateSell.toFixed(2);
  const buy = rate.rateBuy.toFixed(2);
  return `<b>${currency}:</b> ${buy}/${sell}\n`;
};

module.exports = {
  getCurrencyMarkup,
};
