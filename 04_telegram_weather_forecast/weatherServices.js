const axios = require('axios');
const TOKEN = process.env.WEATHER_API_TOKEN.trim() || 'YOUR_WEATHER_API_TOKEN';

const weatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params: {
    appid: TOKEN,
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
