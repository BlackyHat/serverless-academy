const axios = require('axios');

const weatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params: {
    appid: '88d3513aaa5cad80d0fff0c1a836b5ed',
    lat: '44.5248',
    lon: '10.8655',
  },
});

const getForecast = async () => {
  try {
    const { data } = await weatherAPI.get();
    return data;
  } catch (error) {
    console.log(error.message);
    return;
  }
};

module.exports = {
  getForecast,
};
