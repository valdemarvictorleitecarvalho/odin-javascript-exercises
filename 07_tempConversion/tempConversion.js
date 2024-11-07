const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) / 1.8;
  
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (1.8 * temperature) + 32;
  
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
