const getWeatherMarkup = (data, interval = 3) => {
  const { list, city } = data;

  let forecast = [...list];

  if (interval === 6) {
    forecast = list.filter((el, idx) => idx % 2 === 0);
  }
  let markup = `<b>⛈🌤☀️ Forecast for city: ${city.name}, ${city.country}</b>\n\n`;

  forecast
    .slice(0, 9)
    .forEach(({ weather, dt_txt, main, wind, clouds, pop }) => {
      markup +=
        `<b>${dt_txt}</b>\n` +
        `Weather: ${weather[0].main}, ${weather[0].description},\n` +
        `Temperature: ${main.temp} °C,\n` +
        `Humidity: ${main.humidity} %,\n` +
        `Pressure: ${main.pressure} mmHg,\n` +
        `Wind speed: ${wind.speed} meter/sec,\n` +
        `Clouds: ${clouds.all} %,\n` +
        `Probability of precipitation: ${pop} %,\n\n`;
    });
  return markup;
};

module.exports = {
  getWeatherMarkup,
};
