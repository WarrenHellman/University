//Init weather Obj
const weather = new Weather('Seattle');

// Get weather on DOM load:
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results)
    })
    .catch(err => console.log(err));}

