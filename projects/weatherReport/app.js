async function getDays() {
  const urlResponse = await $.ajax('https://api.weather.gov/points/42.1958,-84.3809');
  const daysResponse = await $.ajax(urlResponse.properties.forecast);
  return daysResponse.properties.periods;
};

async function main() {
  // get weather data from API
  const days = await getDays();
  // add weather data to the DOM
  for (let i = 0; i < 6; i++) {
    $("#period" + i).text(days[i].name);
    $("#img" + i).attr({src: days[i].icon});
    $("#details" + i).text(days[i].detailedForecast);
  };
};

main();