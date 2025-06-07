document.addEventListener('DOMContentLoaded',()=> {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDispaly = document.getElementById("city-name");
  const TemperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "40084d0f744c00e90fbfcf7da4866de6";// env variable

  getWeatherBtn.addEventListener('click', async()=> {
    const city = cityInput.value.trim();
    if(!city) return;

    // it may throw and error
    // server and database is always in another continent

    try {
      const WeatherData = await fetchWeatherData(city);
      displayWeatherData(WeatherData);
    } catch(error) {
      showError();
    }

});

  async function fetchWeatherData(city){
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("ROSPONSE", response);
    if(!response.ok){
      throw new Error(" City not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data){
    //display

    console.log(data);
    const {name,main,weather} = data
    cityNameDispaly.textContent = name;
    TemperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = 'Weather : ${weather[0],description}';

    // unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
  function showError(){
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    }
});