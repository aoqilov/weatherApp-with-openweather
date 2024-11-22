// Get elements
const inputValue = document.getElementById("city-input");
const btnSearch = document.getElementById("search-btn");
const divmain = document.getElementById("main");

inputValue.focus();

const getWeather = async (cityname = "tashkent") => {
  console.log("daddasdasdsddas");
  const data = await fetchDate(cityname);
  return data;
};

btnSearch.addEventListener("click", () => {
  const city = inputValue.value.trim(); // Get the city input value
  inputValue.value = ""; // Clear the input field

  if (city) {
    getWeather(city).then((res) => updateUi(res));
  } else {
    alert("Please enter a city name.");
  }
});

function updateUi(data) {
  console.log(data);

  return (divmain.innerHTML = `<div class="weather-info">
          <h2 class="city-name">${data.name}, ${data.sys.country}</h2>

          <img
            id="image-icon"
            class="image-icon"
            src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"
            alt=""
          />
          <p class="description">${data.weather[0].description}</p>

          <p class="temperature">${data.main.feels_like}--°C</p>
        </div>
        <div class="additional-info">
          <div>
            <span>Humidity</span>
            <p class="humidity">${data.main.humidity}--%</p>
          </div>
          <div>
            <span>Wind Speed</span>
            <p class="wind-speed">${data.wind.speed}-- km/h</p>
          </div>
        </div>
  `);
}

// Fetch weather data from OpenWeather API
