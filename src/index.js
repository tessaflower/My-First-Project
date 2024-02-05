function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay}, ${hours}:${minutes}`;
}
let currentDateElement = document.querySelector(".current-details .date-time");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

function citySelected(event) {
  event.preventDefault();
  let input = document.querySelector("#city-searched");
  let currentCity = document.querySelector(".current-city");
  let city = input.value;
  currentCity.innerHTML = input.value;

  let apiKey = `1a747f2d7ac32a100bt13fab8776o6ca`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then((response) => displayWeather(response, city));
}

function displayWeather(response, city) {
  let temperature = Math.round(response.data.temperature.current);
  let country = response.data.country;

  let temperatureElement = document.querySelector(".current-temp-number");
  temperatureElement.innerHTML = `${temperature}`;
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", citySelected);
