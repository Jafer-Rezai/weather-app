const api = {
key: "b0aa4fe92b358ee7567a7128ce839b42",
baseurl: "https://api.openweathermap.org/data/2.5/"}
const searchbox = document.querySelector('.search-bar');
searchbox.addEventListener('keypress', setQuery);

const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', function(){
  getResults(searchbox.value)
});

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.weather_location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.weather_location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main; 

  let humidity = document.querySelector('.current .humidity');
  humidity.innerText = `Humidity: ${weather.main.humidity} %`;

  let wind_speed = document.querySelector('.current .wind');
  wind_speed.innerText = `Wind speed: ${weather.wind.speed} km/h`;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;

  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

}