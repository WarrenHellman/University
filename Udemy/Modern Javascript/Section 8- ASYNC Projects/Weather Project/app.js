//Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
//Init weather Obj
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  weather.changeLocation(city)

  //set location in local storage
  storage.setLocationData(city)

  //get and display weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
})

// Get weather on DOM load:
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));}

