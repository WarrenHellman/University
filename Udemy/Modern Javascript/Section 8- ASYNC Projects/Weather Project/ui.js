class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.windSpeed = document.getElementById('w-windSpeed');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp;
    //this.icon.setAttribute('src', 'url')
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed}`
    this.sunrise.textContent = `Sunrise at: ${weather.sys.sunrise}`
    this.sunset.textContent = `Sunset at: ${weather.sys.sunset}`
    console.log(weather);
  }
}