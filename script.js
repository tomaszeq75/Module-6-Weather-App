/**
 * Weather App
 * ok: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
// console.log(getWeatherData('Łódź'));

let wd;

window.onload = function () {
  let inputField = document.getElementById('city-input');
  inputField.addEventListener('change', () => searchCity());
}

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

  let weatherPromise = fetch(FULL_URL)
    .then(response => {
      console.log('1 then');
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log('2 then');
      console.log(data);
      showWeatherData(data);
      // return data;
    })
    .catch(error => {
      console.log('Wystąpił błąd: ' + error)
    });
    return weatherPromise;
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  city = document.getElementById('city-input').value;
  wd = getWeatherData(city);
  console.log(wd);
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  console.log();
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].description;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;

}