class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.windSpeed = document.getElementById('w-windSpeed');
    this.clouds = document.getElementById('w-clouds');
    this.high = document.getElementById('w-high');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${Math.round(weather.main.temp*9/5 - 459.67)}°F`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
    this.windSpeed.textContent = `Wind Speed: ${Math.round(weather.wind.speed*2.2)} mph`
    this.clouds.textContent = `Percent Cloudy: ${weather.clouds.all}%`
    this.high.textContent = `Today's high: ${Math.round(weather.main.temp_max*9/5-459.97)}°F`
  }
}