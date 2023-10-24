const axios = require('axios');

const bankAPI = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});

const getExchangeRate = async () => {
  try {
    const { data } = await bankAPI.get();
    return data;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
module.exports = {
  getExchangeRate,
};
