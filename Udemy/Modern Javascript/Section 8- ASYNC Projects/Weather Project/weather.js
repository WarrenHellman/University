class Weather {
  constructor(city) {
    this.apiKey = '180a926458624f80c1d61e394308d779'
    this.city = city;
  }
  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city) {
    this.city= city;
  }
}
